"use client"

import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Search({ isOpenModal, openModal, closeModal, setTypeSearch, typeSearch, clearInput }) {
    const [resultSearch, setResultSearch] = useState(null);

    // lay thong tin moi khi ma typeSearch thay doi
    useEffect(() => {
        async function fetchData() {
            if (typeSearch) {
                // call api
                const data = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga/search?name=${typeSearch}`);
                setResultSearch(data.data);
            }
        }
        fetchData();
    }, [typeSearch])

    return (
        <div id="open-search-modal" onClick={openModal} className={`search-bar-navbar bg-[--sidebar-background] ${isOpenModal ? 'w-[744px] z-50' : 'w-80'}  h-8 hidden tablet:flex justify-between items-center px-4 rounded-lg relative`} >
            <div className="glass w-full h-8 bg-[--background-tag] px-4 rounded-lg absolute top-0 left-0 opacity-80 -z-20"></div>
            <input className="navbar-search-input w-full h-full outline-none text-white bg-transparent" onChange={(e) => {
                setTypeSearch(e.target.value)
            }} value={typeSearch} id='search-navbar' placeholder="Search" aria-label="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" className={`fill-white w-4 h-4 ${isOpenModal || typeSearch ? 'hidden' : ''}`} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
            {typeSearch && (
                <div onClick={() => {
                    clearInput(setTypeSearch)
                }} className="clear-input-button absolute right-[8px] top-[4px]">
                    <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                </div>)}
            {/* Result search */}
            <div className={`result-search ${isOpenModal ? '' : 'hidden'} absolute top-9 left-0 w-full rounded-lg p-4 bg-[--background-tags] text-white`}>
                {typeSearch && resultSearch ?
                    <div className='manga-list'>
                        {resultSearch.mangas.length > 0 &&
                            <div>
                                <div className='font-bold text-xl mb-3'>Manga</div>
                                <ul className='flex flex-col gap-2'>
                                    {resultSearch.mangas.map((manga, index) => (
                                        <li key={index} className='rounded p-2 bg-[--background-chapter] hover:bg-[--background-accent-hover]'
                                            onClick={(e) => {
                                                e.stopPropagation(); //! chặn sự kiện click của cha
                                                clearInput(setTypeSearch)
                                                closeModal()
                                            }}
                                        >
                                            <Link className='flex' href={`/titles/${manga.id}/${manga.name}`} >
                                                <div className='w-[56px] h-[80px] rounded overflow-hidden'>
                                                    <img src={manga.coverImage} alt="cover manga" />
                                                </div>
                                                <div className='ml-2 flex flex-col justify-around'>
                                                    <div className='font-bold text-lg'>{manga.name}</div>
                                                    <div className='text-sm flex gap-2'>
                                                        <div className="flex items-center text-[--color-pink-purple]">
                                                            <div>
                                                                <svg data-v-9ba4cb7e data-v-00ce46ca xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-star icon rel text-current mr-1" viewBox="0 0 24 24"><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                                                            </div>
                                                            <div>9.99</div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div>
                                                                <svg data-v-9ba4cb7e data-v-00ce46ca xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" viewBox="0 0 24 24" className="icon rel text-current mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                                                            </div>
                                                            <div>201k</div>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center text-xs gap-2'>
                                                        <div className='w-2 h-2 rounded-xl bg-blue-300'></div>
                                                        <div>Completed</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        {resultSearch.creaters.length > 0 &&

                            <div >
                                <div className='font-bold text-xl mb-3 mt-3'>Authors</div>
                                <ul className='flex flex-col gap-2'>
                                    {resultSearch.creaters.map((creater, index) => (
                                        <li key={index} className='rounded p-2 bg-[--background-chapter] hover:bg-[--background-accent-hover]' onClick={() => {
                                            e.stopPropagation(); //! chặn sự kiện click của cha
                                            clearInput(setTypeSearch)
                                            closeModal()
                                        }}>
                                            <Link className='flex' href={`/`}>
                                                <div className='w-[32px] h-[32px] rounded-full overflow-hidden bg-[--background-tags]'>
                                                    <img src="/guest-ava.png" alt="cover manga" />
                                                </div>
                                                <div className='ml-2 flex flex-col justify-around'>
                                                    <div className='font-bold text-lg'>{creater.name}</div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        }
                        {resultSearch.creaters.length == 0 && resultSearch.mangas.length == 0 && <div className='text-center mt-3'>Can not find the result</div>}

                    </div>
                    :
                    <div>Enter a search query...</div>
                }
            </div>
        </div>
    )
}
