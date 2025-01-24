"use client"
import Image from "next/image";
import SidebarRight from "../Sidebar/SidebarRight";
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { useRouter, usePathname } from 'next/navigation';
export default function ChapterBody({ chapterId, pageNumber, setIsOpenSidebarRight, isOpenSidebarRight, isSidebarOpen }) {
    const router = useRouter();
    // console.log(pageNumber);
    const pathname = usePathname()
    // console.log(pathname);

    let initialPage = Number(pageNumber) || 1; //! trang ban đầu
    const [hoverIndex, setHoverIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [chapter, setChapter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pages, setPages] = useState([]);

    const pageRefs = useRef([]);
    // console.log(chapter);
    // console.log(chapterId);
    // console.log(pages);
    // console.log(initialPage);
    // console.log(currentPage);

    //! Cuộn tới trang từ URL khi component được render
    useEffect(() => {
        // Trì hoãn để đảm bảo `ref` đã được gán
        setTimeout(() => {
            const pageRef = pageRefs.current[initialPage - 1];
            // console.log(pageRef);
            if (pageRef) {
                //! cuộn mượt mà
                // pageRef.scrollIntoView({ behavior: "smooth" });
                setCurrentPage(initialPage);
                initialPage = null;
                //! thay đổi vị triis không cần cuộn
                const rect = pageRef.getBoundingClientRect(); // Lấy thông tin vị trí của phần tử trong viewport
                console.log(rect);

                const scrollTop = window.scrollY + rect.top; // Tính vị trí cuộn cần đến

                // Đặt vị trí cuộn ngay lập tức
                window.scrollTo({
                    top: scrollTop,
                    behavior: "auto", // Cuộn ngay lập tức, không mượt mà
                });
            }
        }, 500); // Trì hoãn để đảm bảo `ref` đã được gán
    }, [initialPage]);

    // lấy thoogn tin chapter
    useEffect(() => {
        const fetchManga = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/chapter/${chapterId}`);
                setChapter(response.data);
                setPages(response.data.pages);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching Chapter:", err);
                setError("Không thể tải dữ liệu Chapter.");
                setLoading(false);
            }
        };

        fetchManga();
    }, [chapterId]);


    let toggleSidebarRight = () => {
        setIsOpenSidebarRight(!isOpenSidebarRight);
    };



    // scroll làm current page thay đổi
    useEffect(() => {
        const handleScroll = () => {

            const scrollTop = window.scrollY;
            // console.log(scrollTop, "scrollTop");
            const windowHeight = window.innerHeight;
            // console.log(windowHeight, "windowHeight");

            const documentHeight = document.body.scrollHeight;
            // console.log(pages.length, "pages.length");
            // console.log((scrollTop + 170) / windowHeight);

            //! Số trang được tính dựa trên vị trí cuộn, phải trừ đi phần bên trên
            const newPage = Math.min(Math.ceil((scrollTop + 170) / windowHeight), pages.length);

            if (newPage !== currentPage) {
                console.log("thay đổi khi cuộn");

                setCurrentPage(newPage);
            }
        };
        // xử lý khi thay đổi current page trong sidebar right
        const pageRef = pageRefs.current[currentPage - 1];
        if (pageRef) {
            //! cuộn mượt mà
            pageRef.scrollIntoView({ behavior: "auto" });
            //! thay đổi vị trí không cần cuộn
            // const rect = pageRef.getBoundingClientRect(); // Lấy thông tin vị trí của phần tử trong viewport
            // const scrollTop = window.scrollY + rect.top; // Tính vị trí cuộn cần đến
            // // Đặt vị trí cuộn ngay lập tức
            // window.scrollTo({
            //     top: scrollTop,
            //     behavior: "smooth", // Cuộn ngay lập tức, không mượt mà
            // });
        }

        // handle next page mỗi khi current page thay đổi
        const newPath = `/chapter/${chapterId}/${currentPage}`
        window.history.replaceState(null, '', newPath)
        // sử lý scroll
        window.addEventListener('scroll', handleScroll);
        // xóa sự kiện scroll
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage, pages]);


    return (
        <>
            <div className={`w-full ${isSidebarOpen ? 'largepc:pl-[256px] ' : ' '}
                
                `} >

                <div>
                    <div className="chapter-name text-lg text-white font-bold">August 31</div>
                    <div className="manga-name text-[--color-pink-purple] cursor-pointer">Hirayasumi</div>
                </div>
                <div className="detailt-chapter flex justify-around gap-4 mt-2">
                    <div className="w-1/3 h-7 bg-[--color-accent] rounded flex justify-center items-center">Vol.7,Ch. 63</div>
                    <div className="w-1/3 h-7 bg-[--color-accent] rounded flex justify-center items-center">Pg. {currentPage} / {pages.length}</div>
                    <div className="w-1/3 h-7 bg-[--color-accent] hover:bg-[--background-tags-hover] rounded flex justify-center items-center cursor-pointer" onClick={toggleSidebarRight}>Menu
                        <svg data-v-9ba4cb7e data-v-ed7dc808 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon text-icon-contrast text-undefined" viewBox="0 0 24 24"><path d="m14.25 18-6-6 6-6" /></svg>
                    </div>
                </div>
            </div>
            {/* <div className={`select-none ${isOpenSidebarRight ? 'pr-[309px] largepc:pr-0' : ''}`}> */}
            <div className={`select-none w-full ${isSidebarOpen ? 'largepc:pl-[256px] ' : ''}
                
                `}>



                {/*  đọc từ trên xuống dưới */}
                <div className="list-pages flex flex-col items-center w-full mt-8 cursor-pointer">

                    {!chapter ? <div>Loading...</div> :
                        <>
                            {/* Giới hạn chiều rộng của ảnh */}
                            {chapter.pages.map((page, index) => {
                                return (
                                    //     //! Fit width DONE
                                    // <div key={index} className="w-full h-auto relative">
                                    //     <Image className="object-fill mt-1"
                                    //         src={page.imageUrl}
                                    //         alt="Picture"
                                    //         // fill={true}
                                    //         width={500}
                                    //         height={500}
                                    //         quality={100}
                                    //         // layout="intrinsic"  // Giữ tỷ lệ ảnh tự động
                                    //         layout="responsive"  // Tự động điều chỉnh kích thước theo vùng chứa
                                    //     />
                                    // </div>
                                    //     //! Fit height DONE
                                    //     //! w max contetnt của thẻ trong nó
                                    <div key={index}
                                        ref={(el) => (pageRefs.current[index] = el)} // Gán ref cho từng trang
                                        className="relative h-[100vh] mt-1">
                                        <div className="absolute top-0 left-0 right-0 flex h-full">
                                            <div className="flex-1 h-full"
                                                onClick={() => {
                                                    if (currentPage == 1) {
                                                        return;
                                                    }
                                                    setCurrentPage(currentPage - 1)
                                                }}></div>
                                            <div className="flex-1 h-full" onClick={toggleSidebarRight}></div>
                                            <div className="flex-1 h-full"
                                                onClick={() => {
                                                    if (currentPage == pages.length) {
                                                        return;
                                                    }
                                                    setCurrentPage(currentPage + 1)
                                                }}
                                            ></div>
                                        </div>
                                        <img className="w-auto h-full object-contain max-w-full" //! phải bỏ w-99vw đi để không giới hạn width
                                            src={page.imageUrl}
                                            alt="Picture" />
                                    </div>
                                    //     //! No limit DONE

                                    // <div key={index} className="relative w-max h-max mt-1">

                                    //     <img className="w-auto h-full mt-1 object-contain max-w-full" //! phải bỏ w-99vw đi để không giới hạn width
                                    //         src={page.imageUrl}
                                    //         alt="Picture" />
                                    // </div>
                                    //     //! fit both DONE
                                    // <div key={index} className="relative w-[100vw] h-max mt-1 flex flex-col items-center">

                                    //     <img className="w-auto h-full mt-1 object-contain max-w-full" //! phải bỏ w-99vw đi để không giới hạn width
                                    //         src={page.imageUrl}
                                    //         alt="Picture" />
                                    // </div>
                                )
                            })}
                        </>
                    }
                </div>

            </div>

            {/* Process bar normal*/}
            <div className="process-bar select-none">
                <div className="process-bar-in">
                    <div className="process-bar-inner-wrap relative">
                        <div className="process-bar-inner relative" style={{ width: `${(currentPage / pages.length) * 100}%` }}>
                            <div className="current-page-in absolute right-0" style={{ width: `${(1 / currentPage) * 100}%` }}></div>
                        </div>
                        <div className="divider-process-bar h-full w-full absolute top-0 left-0 flex justify-between">
                            {pages.map((page, index) => {
                                return (
                                    <div key={index} className={`divider-process-bar-item ${index == 0 ? 'rounded-l-lg' : ''} ${index == pages.length - 1 ? 'rounded-r-lg' : ''}
                                        ${index > -1 && index < currentPage ? 'bg-[--background-process-bar-inner-wrap-opacity]' : 'bg-[--background-process-bar-inner-wrap]'}
                                        `}
                                        style={{ width: `${(1 / pages.length) * 100}%` }}
                                        onMouseEnter={() => setHoverIndex(index)} // Khi hover vào item
                                        onMouseLeave={() => setHoverIndex(null)}  // Khi rời chuột khỏi item
                                        onClick={() => setCurrentPage(index + 1)} // Khi click vào item
                                    >
                                        {hoverIndex === index && ( // Hiển thị label chỉ khi hover đúng item
                                            <div className="divider-process-bar-item-label">
                                                {`${index + 1}`}
                                            </div>
                                        )}

                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>


            <SidebarRight pages={pages}
                isOpenSidebarRight={isOpenSidebarRight}
                toggleSidebarRight={toggleSidebarRight}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
}
