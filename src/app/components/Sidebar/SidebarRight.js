"use client"

import Link from "next/link";
import { useEffect, useRef, useState } from "react"

export default function SidebarRight({ isOpenSidebarRight, toggleSidebarRight, pages, currentPage, setCurrentPage
    , currentDisplayStyles, setCurrentDisplayStyles
    , currentImageFit, setCurrentImageFit
    , currentProcessBarStyle, setCurrentProcessBarStyle,
    setFlagScroll, currentChapter, chapterList, chapterName, mangaName,mangaId
}) {

    const [switchDropdownPage, setSwitchDropdownPage] = useState(false)
    const [switchDropdownChapter, setSwitchDropdownChapter] = useState(false)
    const dropdownPageRef = useRef(null);
    const dropdownChapterRef = useRef(null);
    const pageDisplayStyles = [
        { icon: "M20 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2m0 20v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6", label: "Long Strip" },
        { icon: "M22 20h-6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M2 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2", label: "Wide Strip" },
        { icon: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z", label: "Single Page" }
    ];

    const imageFits = [
        { icon: "m5 9-3 3 3 3m14-6 3 3-3 3M2 12h20", label: "Fit Width" },
        { icon: "m9 5 3-3 3 3m0 14-3 3-3-3m3-17v20", label: "Fit Height" },
        { icon: "m9.5 13.09 1.41 1.41-4.5 4.5H10v2H3v-7h2v3.59zm1.41-3.59L9.5 10.91 5 6.41V10H3V3h7v2H6.41zm3.59 3.59 4.5 4.5V14h2v7h-7v-2h3.59l-4.5-4.5zM13.09 9.5l4.5-4.5H14V3h7v7h-2V6.41l-4.5 4.5z", label: "Fit Both" },
        { icon: "M5.691 5.613 18.42 18.341", label: "No Limit" }
    ];

    const processBarStyles = [
        { icon: "M4 15h16", label: "Process Hidden" },
        { icon: "M4 15h16M7 15v-5m10 5v-5", label: "Process LightBar" },
        { icon: "M4 15h16M7 15v-5m10 5v-5M4 9h16", label: "Normal Process" }
    ];

    const handleModeSwitch = (setFunc, arrayOption) => {
        setFunc((prevMode) => (prevMode + 1) % arrayOption.length); // Quay vòng
    };
    // ! turn on dropdown
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
        checkHandleOutsite(event, dropdownPageRef, setSwitchDropdownPage);
        checkHandleOutsite(event, dropdownChapterRef, setSwitchDropdownChapter);
    }


    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideSwitchdown);

        return () => {
            document.removeEventListener('mousedown', handleOutsideSwitchdown);
        };
    }, []);

    return (
        <div className={`sidebar-right select-none fixed top-0 right-0 bg-[--background] p-[16px] w-[311px] h-full flex flex-col gap-2 ${!isOpenSidebarRight ? 'hidden' : ''}`}>
            <div className="close-button ml-[-9px] cursor-pointer hover:bg-[--background-button-right-side] transition-background duration-200 w-10 h-10 center-children rounded-full" onClick={toggleSidebarRight}>
                <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
            </div>

            <div className="detail-chapter">
                <div className="manga-name flex my-2">
                    <div>
                        <svg data-v-9ba4cb7e="" data-v-5d3b2210="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="feather feather-book-open icon text-icon-contrast text-undefined mr-4 my-auto" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <Link
                        href={`/titles/${mangaId}/i-am-a-max-level-priestess-in-another-world`}
                        className="manga-name text-[--color-pink-purple] cursor-pointer"
                    >
                        {mangaName}
                    </Link>
                </div>
                <div className="chapter-name flex my-2">
                    <div>
                        <svg data-v-9ba4cb7e="" data-v-5d3b2210="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-4"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 2v7h7"></path></svg>
                    </div>
                    <div>{chapterName}</div>
                </div>
            </div>

            <div className="page-route flex gap-1 ">
                <div className="previous-page  button-sidebar-right w-[32px] h-[54px] rounded center-children"
                    onClick={() => {
                        if (currentPage == 1) {
                            return;
                        }
                        setCurrentPage(currentPage - 1)
                        setFlagScroll(false);

                    }}
                >
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m14.25 18-6-6 6-6" /></svg>

                </div>
                <div className="dropdown-select-page cursor-pointer relative bg-[--sidebar-background] grow rounded flex justify-between items-center px-4 py-2 h-[54px]"
                    ref={dropdownPageRef}
                    onClick={() => {
                        turnSwitchdown(setSwitchDropdownPage, switchDropdownPage)
                    }}
                >
                    <div className="page-number-detail">
                        <div className="text-xs">Page</div>
                        <div>{currentPage}</div>
                    </div>
                    <div className="dropdown-select-chap-button">
                        <svg data-v-9ba4cb7e data-v-d2fabe5b xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon text-icon-contrast text-undefined " viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    {/* dropdown select page */}
                    <div className={` rounded text-base w-full h-[384px] overflow-y-scroll bg-[--background-chapter] absolute left-0 top-14 z-10 mt-1 p-1
                    
                    ${!switchDropdownPage ? 'hidden' : 'block'}`}
                    >
                        <ul className="">
                            {pages.map((page, index) => {
                                return (
                                    <li key={index} className={`py-2 px-4  rounded cursor-pointer 
                                        ${page.pageOrder == currentPage ? `bg-[--color-pink-purple]` : `hover:bg-[--background-accent-hover]`}
                                        `}

                                        onClick={() => {
                                            setCurrentPage(page.pageOrder);
                                            setFlagScroll(false);
                                            turnoffSwitchdown(setSwitchDropdownPage)
                                        }}>{page.pageOrder}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                <div className="next-page button-sidebar-right w-[32px] h-[54px] rounded center-children"
                    onClick={() => {
                        if (currentPage == pages.length) {
                            return;
                        }
                        setCurrentPage(currentPage + 1)
                        setFlagScroll(false);

                    }}
                >
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-right icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m10 18 6-6-6-6" /></svg>

                </div>
            </div>
            {/* Chapter route */}
            <div className="chapter-route flex gap-1 ">
                <div className="previous-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m14.25 18-6-6 6-6" /></svg>
                </div>
                <div
                    ref={dropdownChapterRef}
                    onClick={() => {
                        turnSwitchdown(setSwitchDropdownChapter, switchDropdownChapter)
                    }}
                    className="dropdown-select-chap cursor-pointer relative bg-[--sidebar-background] grow rounded flex justify-between items-center px-4 py-2 h-[54px]">
                    <div className="chap-number">
                        <div className="text-xs">Chapter</div>
                        <div>Chapter {currentChapter}</div>
                    </div>
                    <div className="dropdown-select-chap-button">
                        <svg data-v-9ba4cb7e data-v-d2fabe5b xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon text-icon-contrast text-undefined " viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                    {/* dropdown select chapter */}
                    <div className={` rounded text-base w-full h-[384px] overflow-y-scroll bg-[--background-chapter] absolute left-0 top-14 z-10 mt-1 p-1 
                    ${!switchDropdownChapter ? 'hidden' : 'block'}`}
                    >
                        <ul className="flex flex-wrap gap-1">
                            {chapterList.map((chapter, index) => {
                                return (
                                    <Link href={`/chapter/${chapter.id}/1`}
                                     key={index} className={`w-full py-2 px-4 rounded cursor-pointer 
                                        ${chapter.chapterNumber == currentChapter ? `bg-[--color-pink-purple]` : `hover:bg-[--background-accent-hover]`}
                                        `}
                                        onClick={() => {
                                            turnoffSwitchdown(setSwitchDropdownChapter);
                                            // go to chapter

                                        }}>Chapter {chapter.chapterNumber}</Link>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="next-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-right icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m10 18 6-6-6-6" /></svg>

                </div>

            </div>
            <hr className="border-none h-[1px] bg-[--background-tag] my-4" />
            {/* Uploaded by */}
            <div className="">
                <div>Uploaded By</div>
                <div className="flex gap-1 py-2">
                    <div>
                        <svg data-v-9ba4cb7e data-v-514756c3 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined largeIcon mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>
                    </div>
                    <div className="text-blue-400">leo</div>
                </div>
            </div>
            <hr className="border-none h-[1px] bg-[--background-tag] my-4" />
            {/* Display style */}
            <div className="button-option-reader button-sidebar-right rounded"
                onClick={() => {
                    handleModeSwitch(setCurrentDisplayStyles, pageDisplayStyles);
                }}
            >
                <div className="flex py-2 px-4">

                    <div>
                        <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon mr-4" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pageDisplayStyles[currentDisplayStyles].icon} /></svg>
                    </div>
                    <div>{pageDisplayStyles[currentDisplayStyles].label}</div>
                </div>
            </div>

            {/* Imgae fit */}
            <div className="button-option-reader button-sidebar-right rounded"
                onClick={() => {
                    handleModeSwitch(setCurrentImageFit, imageFits);
                }}
            >
                <div className="flex py-2 px-4">
                    <div>
                        <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon mr-4" style={{ color: 'currentcolor' }}><g stroke="currentColor" strokeWidth={2}><circle cx={12} cy="11.969" r="9.624" /><path strokeLinecap="round" strokeLinejoin="round" d={imageFits[currentImageFit].icon} /></g></svg>
                    </div>
                    <div>{imageFits[currentImageFit].label}</div>
                </div>
            </div>
            {/* Process bar style */}
            <div className="button-option-reader button-sidebar-right rounded"
                onClick={() => {
                    handleModeSwitch(setCurrentProcessBarStyle, processBarStyles);
                }}
            >
                <div className="flex py-2 px-4">
                    <div>
                        <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className="icon mr-4" style={{ color: 'currentcolor' }}><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={processBarStyles[currentProcessBarStyle].icon} /></svg>
                    </div>
                    <div>{processBarStyles[currentProcessBarStyle].label}</div>
                </div>
            </div>
        </div>
    )
}
