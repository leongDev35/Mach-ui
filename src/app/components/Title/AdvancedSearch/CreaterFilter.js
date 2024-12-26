"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Pagination from '../../common/Pagination'
import { useMangaApiGet } from '../../common/useMangaApi';
import { clickAndSetValueThenCloseDropdown, clickAndSetValueToNull, handleClick } from '../../common/commonFunc';
import { useSelector } from 'react-redux';

export default function CreaterFilter({
    title,
    placeholder,
    dropdownRef,
    turnSwitchdown,
    switchDropdown,
    setSwitchDropdownManga,
    selectedManga,
    setSelectedManga
}) {
    const { fetchMangaData, loading, error } = useMangaApiGet();
    //! field Chapter
    const [userOwnedMangas, setUserOwnedMangas] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetchMangaData();
                setUserOwnedMangas(response);
                console.log(response); // Xử lý dữ liệu trả về nếu cần
            } catch (err) {
                console.error(err); // Xử lý lỗi nếu xảy ra
            }
        };
        fetchData();
    }, []);

    return (

        <div tabIndex="0" ref={dropdownRef} className="item-filter sort-by-filter text-sm cursor-pointer relative">
            <div className="mb-1 text-[--text-gray]">
                {title}
            </div>

            {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
            <div tabIndex="0" className="input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
                onClick={() => {
                    turnSwitchdown(setSwitchDropdownManga, switchDropdown)
                }}
            >
                {!selectedManga ?
                    <>
                        <div className="text-base font-bold select-none">
                            {placeholder}
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="w-5 h-5 my-auto text-midTone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="{2}" d="m8 9l4-4l4 4m0 6l-4 4l-4-4" /></svg>
                        </div>
                    </>
                    :
                    // selected manga
                    <div className="w-full flex gap-2 p-2 bg-[--background-chapter]" >
                        <div className="img-manga w-[40px] h-[52px] overflow-hidden relative">
                            <Image className="rounded object-cover "
                                src={`${selectedManga.coverImage}`}
                                alt="Picture of the manga"
                                fill={true}
                            />
                        </div>
                        <div className="detail-manga-update grow">
                            <div className="flex justify-between w-fufll">
                                <div className='w-full'>
                                    <div className="flex w-full items-center justify-between px-1">
                                        <div className="flex items-center px-1 mb-2">
                                            <div>
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                            </div>
                                            <div className='manga-update-name font-bold'>{selectedManga.name}</div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <button
                            onClick={() => clickAndSetValueToNull(setSelectedManga)}
                            className="px-4 py-2 text-white rounded"
                        >
                            <svg data-v-9ba4cb7e data-v-c3aadb04 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-trash-2 icon text-icon-contrast text-undefined cursor-pointer" viewBox="0 0 24 24"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6" /></svg>

                        </button>
                    </div>
                }




            </div>
            {/* dropdown */}
            <div id='1' className={`dropdown-filter-option-list rounded text-base w-full laptop:h-[448px] bg-[--background-chapter] absolute z-10 mt-1 ${!switchDropdown ? 'hidden' : 'block'}`}
            >
                <div className="container-search-tags py-1.5 pl-8 text-sm flex grow bg-[--background-grey] relative rounded-lg">
                    <div className='absolute left-[11px] top-[10px]'>
                        <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
                    </div>
                    <input type="text" className="input-search-tags text-sm w-full bg-[--background-grey]"
                        // value={inputValueSearchTags}
                        onChange={(e) => {
                            // handleInputChange(e, setInputValueSearchTags)
                        }} placeholder='Search' />

                </div>
                <ul className="user-manga-list mt-3 h-3/4">

                    {userOwnedMangas.length != 0 ? <>
                        {userOwnedMangas.map((manga, index) => {
                            return (
                                <div key={index} className="item-list-manga-update hover:bg-[--background-light-purple]"
                                    onClick={() => {
                                        clickAndSetValueThenCloseDropdown(manga, setSelectedManga, setSwitchDropdownManga)
                                    }}
                                >
                                    <div className="img-manga w-[64px] h-[88px] overflow-hidden relative">
                                        <Image className="rounded object-cover "
                                            src={`${manga.coverImage}`}
                                            alt="Picture of the manga"
                                            fill={true}
                                        />
                                    </div>
                                    <div className="detail-manga-update grow">
                                        <div className="flex justify-between w-fufll">
                                            <div className='w-full'>
                                                <div className="flex w-full items-center justify-between px-1">
                                                    <div className="flex items-center px-1 mb-2">
                                                        <div>
                                                            <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                        </div>
                                                        <div className='manga-update-name font-bold'>{manga.name}</div>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </> :
                        <>
                            <div>
                                {loading}
                            </div>
                        </>}

                </ul>
                <div className="pagination-cover flex justify-center mt-3">
                    <Pagination
                        currentPage={1}
                        totalPages={1}
                        onPageChange={1}
                    />
                </div>


            </div>
        </div>

    )
}
