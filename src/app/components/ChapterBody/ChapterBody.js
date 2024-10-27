"use client"
import Image from "next/image";
import SidebarRight from "../Sidebar/SidebarRight";
import { useState } from 'react';

export default function ChapterBody({ chapterId, pageNumber, setIsOpenSidebarRight, isOpenSidebarRight}) {

    // const [isOpenSidebarRight, setIsOpenSidebarRight] = useState(false);

    let toggleSidebarRight = () => {
        setIsOpenSidebarRight(!isOpenSidebarRight);
    };

    return (
        <>
            <div className={`select-none ${isOpenSidebarRight ? 'pr-[309px] largepc:pr-0' : ''}`}>
                <div>
                    <div className="chapter-name text-lg text-white font-bold">August 31</div>
                    <div className="manga-name text-[--color-pink-purple] cursor-pointer">Hirayasumi</div>
                </div>
                <div className="detailt-chapter flex justify-around gap-4">
                    <div className="w-1/3 h-7 bg-[--background-tag] rounded flex justify-center items-center">Vol.7,Ch. 63</div>
                    <div className="w-1/3 h-7 bg-[--background-tag] rounded flex justify-center items-center">Pg. 2 / 21</div>
                    <div className="w-1/3 h-7 bg-[--background-tag] hover:bg-[--background-tags-hover] rounded flex justify-center items-center cursor-pointer" onClick={toggleSidebarRight}>Menu
                        <svg data-v-9ba4cb7e data-v-ed7dc808 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon text-icon-contrast text-undefined" viewBox="0 0 24 24"><path d="m14.25 18-6-6 6-6" /></svg>

                    </div>
                </div>
                <hr className="mt-8" />
                <div className="list-pages flex flex-col items-center w-full mt-8">
                    <Image className="w-full max-w-[800px] mt-1"
                        src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100} //! 100% độ phân giải
                    />
                    <Image className="w-fit max-w-[800px] mt-1"
                        src={"/1-86241a5cadbb01627302f4656090520e98468e481da46779da6704318ab9a8eb.png"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}
                        layout="responsive"
                    />
                    <Image className="max-w-full max-w-[1400px] mt-1"
                        src={"/19bf1abf-f1e1-4094-8f18-1d11cb66f5b6.png"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}
                        layout="responsive"
                    />
                    <div className="max-h-[2048px] h-[1900px]">
                        <Image className="mt-1  h-full w-full"
                            src={"/1-86241a5cadbb01627302f4656090520e98468e481da46779da6704318ab9a8eb.png"}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={100}
                            layout="responsive"
                        />
                    </div>
                    <div className="object-fill max-w-[1400px] max-h-[1300px] w-full">
                        <Image className=" mt-1"
                            src={"/19bf1abf-f1e1-4094-8f18-1d11cb66f5b6.png"}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                            quality={100}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
            <SidebarRight isOpenSidebarRight={isOpenSidebarRight} toggleSidebarRight={toggleSidebarRight} />
        </>
    )
}
