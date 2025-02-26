"use client"
import Image from "next/image";
import SidebarRight from "../Sidebar/SidebarRight";
import { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { useRouter, usePathname } from 'next/navigation';
import LongStrip from "./PageDisplayStyle/LongStrip";
import WideStrip from "./PageDisplayStyle/WideStrip";
import SinglePage from "./PageDisplayStyle/SinglePage";
import Link from "next/link";
export default function ChapterBody({ chapterId, pageNumber, setIsOpenSidebarRight, isOpenSidebarRight, isSidebarOpen }) {
    const router = useRouter();
    // console.log(pageNumber);
    const pathname = usePathname()
    // console.log(pathname);

    let initialPage = Number(pageNumber) || 1; //! trang ban đầu
    const [hoverIndex, setHoverIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(pageNumber);
    const [currentChapter, setCurrentChapter] = useState(null);
    const [chapter, setChapter] = useState(null);
    const [chapterList, setChapterList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pages, setPages] = useState([]);
    const [currentDisplayStyles, setCurrentDisplayStyles] = useState(0);
    const [currentImageFit, setCurrentImageFit] = useState(1);
    const [currentProcessBarStyle, setCurrentProcessBarStyle] = useState(0);
    const pageRefs = useRef([]);
    const containerListPageRef = useRef(null);
    const [flagScroll, setFlagScroll] = useState(false);

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
                // const rect = pageRef.getBoundingClientRect(); // Lấy thông tin vị trí của phần tử trong viewport
                // const scrollTop = window.scrollY + rez`ct.top; // Tính vị trí cuộn cần đến

                // // Đặt vị trí cuộn ngay lập tức
                // window.scrollTo({
                //     top: scrollTop,
                //     behavior: "auto", // Cuộn ngay lập tức, không mượt mà
                // });
            }
        }, 500); // Trì hoãn để đảm bảo `ref` đã được gán
    }, [initialPage]);

    //! lấy thông tin chapter
    useEffect(() => {
        const fetchManga = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/chapter/${chapterId}`);
                setChapter(response.data);
                setPages(response.data.pages);
                setCurrentChapter(response.data.chapterNumber);
                setChapterList(response.data.manga.chapters);
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
        const pageRef = pageRefs.current[currentPage - 1];
        // xử lý cuộn
        const handleScroll = () => {
            if (containerListPageRef.current) {
                //! trường hợp wide strip
                if (currentDisplayStyles === 1) {
                    if (pageRef) {
                        const rect = pageRef.getBoundingClientRect(); // Lấy thông tin vị trí của phần tử trong viewport

                        if (rect.left > rect.width) {
                            setCurrentPage(currentPage + 1);
                            setFlagScroll(true);
                        } else if (rect.left < -rect.width) {
                            setCurrentPage(currentPage - 1);
                            setFlagScroll(true);
                        }
                    }
                }

                //! trường hợp long strip
                if (currentDisplayStyles === 0) {
                    if (pageRef) {
                        const rect = pageRef.getBoundingClientRect(); // Lấy thông tin vị trí của phần tử trong viewport
                        if (rect.top > rect.height) {
                            setCurrentPage(currentPage - 1);
                            setFlagScroll(true);
                        } else if (rect.top < -rect.height) {
                            setCurrentPage(currentPage + 1);
                            setFlagScroll(true);
                        }

                    }
                }

            }

        };
        if (containerListPageRef.current) {
            containerListPageRef.current.addEventListener("scroll", handleScroll);
        }
        // console.log(flagScroll, "flagScroll");

        // xử lý khi thay đổi current page trong sidebar right
        console.log("outside", flagScroll);

        if (pageRef && !flagScroll) {
            console.log("inside", flagScroll);

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
            if (containerListPageRef.current) {
                containerListPageRef.current.removeEventListener("scroll", handleScroll);
            }
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentPage, pages, currentDisplayStyles]);

    return (
        <>



            {chapter &&
                <div className={`w-full ${isSidebarOpen ? 'largepc:pl-[256px] ' : ' '} `} >

                    <div>
                        <div className="chapter-name text-lg text-white font-bold" >{chapter.name}</div>
                        <Link
                            href={`/titles/${chapter.manga.id}/i-am-a-max-level-priestess-in-another-world`}
                            className="manga-name text-[--color-pink-purple] cursor-pointer"
                        >
                            {chapter.manga.name}
                        </Link>
                    </div>
                    <div className="detailt-chapter flex justify-around gap-4 mt-2">
                        <div className="w-1/3 h-7 bg-[--color-accent] rounded flex justify-center items-center">Ch. {chapter.chapterNumber}</div>
                        <div className="w-1/3 h-7 bg-[--color-accent] rounded flex justify-center items-center">Pg. {currentPage} / {pages.length}</div>
                        <div className="w-1/3 h-7 bg-[--color-accent] hover:bg-[--background-tags-hover] rounded flex justify-center items-center cursor-pointer" onClick={toggleSidebarRight}>Menu
                            <svg data-v-9ba4cb7e data-v-ed7dc808 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon text-icon-contrast text-undefined" viewBox="0 0 24 24"><path d="m14.25 18-6-6 6-6" /></svg>
                        </div>
                    </div>
                </div>

            }

            {/* <div className={`select-none ${isOpenSidebarRight ? 'pr-[309px] largepc:pr-0' : ''}`}> */}
            <div className={`select-none w-full ${isSidebarOpen ? 'largepc:pl-[256px] ' : ''} `}>



                {/*  đọc từ trên xuống dưới */}
                {chapter && <>
                    {currentDisplayStyles === 0 ? <LongStrip
                        containerListPageRef={containerListPageRef}
                        chapter={chapter}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                        pageRefs={pageRefs}
                        toggleSidebarRight={toggleSidebarRight}
                        currentImageFit={currentImageFit}
                        pages={pages}
                        setFlagScroll={setFlagScroll}

                    ></LongStrip> :
                        currentDisplayStyles === 1 ? <WideStrip
                            containerListPageRef={containerListPageRef}
                            chapter={chapter}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageRefs={pageRefs}
                            toggleSidebarRight={toggleSidebarRight}
                            currentImageFit={currentImageFit}
                            pages={pages}
                            setFlagScroll={setFlagScroll}

                        /> : <SinglePage
                            containerListPageRef={containerListPageRef}
                            chapter={chapter}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                            pageRefs={pageRefs}
                            toggleSidebarRight={toggleSidebarRight}
                            currentImageFit={currentImageFit}
                            pages={pages}
                            setFlagScroll={setFlagScroll}

                        />
                    }

                </>

                }


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
                                        onClick={() => {
                                            setFlagScroll(false);
                                            setCurrentPage(index + 1); // Khi click vào item
                                        }
                                        }

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
                chapterName={chapter?.name}
                mangaName={chapter?.manga?.name}
                mangaId={chapter?.manga?.id}
                isOpenSidebarRight={isOpenSidebarRight}
                toggleSidebarRight={toggleSidebarRight}
                currentPage={currentPage}
                chapterList={chapterList}
                currentChapter={currentChapter}
                setCurrentPage={setCurrentPage}
                currentDisplayStyles={currentDisplayStyles}
                setCurrentDisplayStyles={setCurrentDisplayStyles}
                currentImageFit={currentImageFit}
                setCurrentImageFit={setCurrentImageFit}
                currentProcessBarStyle={currentProcessBarStyle}
                setCurrentProcessBarStyle={setCurrentProcessBarStyle}
                setFlagScroll={setFlagScroll}
            />
        </>
    )
}
