"use client"


import React, { useEffect, useRef, useState } from 'react'
import CreaterFilter from '../Title/AdvancedSearch/CreaterFilter'
import InputUpload from './InputUpload'
import ChapterNumber from './ChapterNumber'
import ImageUpload from './ChoseImagesDetail'
import ChoseImageDetail from './ChoseImagesDetail'
import Image from 'next/image'

export default function SelectBar() {
    const [switchDropdownArtists, setSwitchDropdownArtists] = useState(false)
    const [switchDropdownManga, setSwitchDropdownManga] = useState(false)
    const [chapterNumber, setChapterNumber] = useState('')
    const [chapterName, setChapterName] = useState('')
    const [selectedImages, setSelectedImages] = useState([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalChapterReview, setIsOpenModalChapterReview] = useState(false);
    // Hiện tooltip cho mỗi ảnh
    const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });
    const tooltipRef = useRef(null);
    const dropdownArtistsFilterRef = useRef(null);
    const dropdownMangaFilterRef = useRef(null);
    const turnSwitchdown = (setTurnSwitchDownFunc, switchDropDownType) => {
        setTurnSwitchDownFunc(!switchDropDownType);
    }
    const turnoffSwitchdown = (setSwitchDropdownFunc) => {
        setSwitchDropdownFunc(false);
    }
    function checkHandleOutsite(event, ref, setDropdownFunc) {
        if (ref.current && !ref.current.contains(event.target)) {
            turnoffSwitchdown(setDropdownFunc);
        }
    }
    const handleOutsideSwitchdown = (event) => {
        checkHandleOutsite(event, dropdownArtistsFilterRef, setSwitchDropdownArtists);
        checkHandleOutsite(event, dropdownMangaFilterRef, setSwitchDropdownManga);
    }
    // Modal
    // Hàm mở modal
    const openModalChapterReview = () => {
        setIsOpenModalChapterReview(true);
    };
    const closeModalChapterReview = () => {
        setIsOpenModalChapterReview(false);
        // setIsOpacityFullModalUser(false);
    };

    // Đóng modal khi nhấp bên ngoài modal
    const handleOutsideClick = (event) => {
        if (event.target.id === "myModal") {
            closeModalChapterReview();
        }
    };

    // Tooltop
    const handleMouseOver = (e, info) => {
        setTooltip({
            visible: true,
            text: info,
            x: e.pageX + 10,
            y: e.pageY + 10,
        });
    };

    const handleMouseMove = (e) => {
        if (tooltip.visible) {
            setTooltip((prev) => ({
                ...prev,
                x: e.pageX + 10,
                y: e.pageY + 10,
            }));
        }
    };

    const handleMouseOut = () => {
        setTooltip({ visible: false, text: "", x: 0, y: 0 });
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideSwitchdown);

        return () => {
            document.removeEventListener('mousedown', handleOutsideSwitchdown);
        };
    }, []);
    console.log(selectedImages);
    
    return (
        <div className="flex flex-col gap-4 mt-5">
            <CreaterFilter
                title={"Group"}
                placeholder={"Chose group"}
                dropdownRef={dropdownArtistsFilterRef}
                turnSwitchdown={turnSwitchdown}
                switchDropdown={switchDropdownArtists}
                setSwitchDropdown={setSwitchDropdownArtists}
            >
            </CreaterFilter>
            <CreaterFilter
                title={"Manga"}
                placeholder={"Chose Manga"}
                dropdownRef={dropdownMangaFilterRef}
                turnSwitchdown={turnSwitchdown}
                switchDropdown={switchDropdownManga}
                setSwitchDropdown={setSwitchDropdownManga}
            >
            </CreaterFilter>
            <ChapterNumber
                title={"Chapter number"}
                placeholder={"Enter number"}
                chapterNumber={chapterNumber}
                setChapterNumber={setChapterNumber}
            ></ChapterNumber>
            <InputUpload
                title={"Chapter Name"}
                placeholder={"Enter Name"}
                chapterName={chapterName}
                setChapterName={setChapterName}
            ></InputUpload>
            <ChoseImageDetail
                selectedImages={selectedImages}
                setSelectedImages={setSelectedImages}
            >
            </ChoseImageDetail>
            <button className={`mb-1 text-white  px-3 py-2 rounded-lg select-none
            ${selectedImages.length != 0 ? 'bg-[--color-pink-purple]' : 'bg-[--background-grey] cursor-not-allowed pointer-events-none'}
            `}
                onClick={openModalChapterReview}
            >Chapter Preview</button>

            {isOpenModalChapterReview && <>
                <div id="myModal" class="modal"
                    onClick={handleOutsideClick}
                >
                    <div id="modal-chapter-review" className="modal-chapter-review w-3/4 z-50"
                    >
                        <div className="flex flex-col gap-1 items-center w-full h-[1000px] overflow-y-scroll rounded">

                            {selectedImages.map((image, index) => {
                                return <div key={image.id} className="w-full relative"
                                    onMouseOver={(e) => handleMouseOver(e, '#' + (index + 1))}
                                    onMouseMove={handleMouseMove}
                                    onMouseOut={handleMouseOut}
                                >
                                    <Image className="w-full "
                                        data-info="Thông tin của ảnh 1"
                                        src={image.url}
                                        alt="Picture of the author"
                                        width={500}
                                        height={500}
                                        quality={100} //! 100% độ phân giải
                                    />

                                </div>

                            })}

                            {tooltip.visible && (
                                <div
                                    ref={tooltipRef}
                                    className="tooltip"
                                    style={{ left: `${tooltip.x - 60}px`, top: `${tooltip.y - 60}px` }}
                                >
                                    {tooltip.text}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </>

            }

        </div>
    )
}
