"use client"
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ContentMangaPage({ mangaId }) {

    // lay thong tin manga tu mangaId
    const [manga, setManga] = useState(null);
    const [uniqueNamesCreater, setUniqueNamesCreater] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    console.log(manga);
    console.log(uniqueNamesCreater);

    useEffect(() => {
        const fetchManga = async () => {
            try {
                const response = await axios.get(`http://localhost:8686/api/v1/manga/${mangaId}`);
                setManga(response.data);
                setUniqueNamesCreater(Array.from(new Set(response.data.createrRoles.map(item => item.creater.name))))
                setLoading(false);
            } catch (err) {
                console.error("Error fetching manga:", err);
                setError("Không thể tải dữ liệu manga.");
                setLoading(false);
            }
        };

        fetchManga();
    }, [mangaId]);

    // các trường của manga hiện thông tin lên
    // chỉnh lại id của manga

    return (
        <>
            {!manga ? <div>Loading...</div> :
                <div className="title-manga grid grid-cols-[200px_auto] gap-4">
                    <div className="banner z-[-10] absolute top-[calc(-1*var(--navbar-height))] left-0 bg-red-200 w-full h-[500px] blur-sm opacity-25">
                        <Image className="rounded w-full h-[500px] object-cover"
                            src={manga.coverImage}
                            alt="Picture of the author"
                            width={100}
                            height={500}
                        />
                    </div>
                    <div className="banner-cut z-[-10] absolute top-[283px] left-0 bg-[--background] w-full h-[500px] opacity-90">

                    </div>

                    <div className="image-manga row-span-4 w-[200px] h-[283px] overflow-hidden relative">
                        <Image className="rounded object-cover"
                            src={manga.coverImage}
                            alt="Picture of the Manga"
                            fill={true}
                        />
                    </div>
                    <div className="name-manga flex flex-col h-[216px]">
                        <div className="text-7xl font-bold">{manga.name}</div>
                        <div className="text-xl grow">
                            {manga.altTitleResponse.map((item, index) => (
                                // Với <React.Fragment>, bạn có thể trả về nhiều phần tử mà không cần bao bọc chúng trong một thẻ HTML
                                <React.Fragment key={index}>
                                    {item.title}
                                    {index < manga.altTitleResponse.length - 1 && ", "}
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="text-lg">  {uniqueNamesCreater.map((item, index) => (
                            <React.Fragment key={index}>
                                {item}
                                {index < uniqueNamesCreater.length - 1 && ", "}
                            </React.Fragment>
                        ))}</div>
                    </div>
                    <div className="title-button flex h-12 gap-2">
                        <div className="button-status rounded text-base h-full w-56 bg-[--color-pink-purple] flex justify-center items-center">
                            Add To Library
                        </div>
                        <div className="button-favorite bg-white w-[74px] h-full "></div>
                        <div className="button-option bg-white w-12"></div>
                    </div>
                    <div className="manga-info h-[18px] flex flex-wrap items-center gap-3">
                        <div className="list-of-tags flex flex-wrap gap-3 text-[10px]">
                            {manga.tags.map((tag, index) => {
                                return (
                                    <div key={index} className="tag bg-[--background-tag] rounded px-1">
                                        {/* them link vao tag */}
                                        <a href="">{tag.name}</a>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="date-publication-and-status flex items-center gap-1">
                            <div className="dot-status w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs font-semibold">Publication: {manga.releaseYear}, {manga.publicationStatus}</span>
                        </div>
                    </div>
                    <div className="col-span-full">{manga.description}</div>
                    <div className="detail-manga col-span-full">
                        <div className="detail-manga-container flex flex-col">
                            <div className="synopsis mb-10">
                                <div className="flex gap-5 flex-wrap">
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Author</div>
                                        <div className="flex gap-2">
                                            {manga.authors.map((author, index) => {
                                                return (
                                                    <div key={index} className="tag-manga-page">
                                                        <a href="">{author.creater.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Artist</div>
                                        <div className="flex gap-2">
                                            {manga.artists.map((artist, index) => {
                                                return (
                                                    <div key={index} className="tag-manga-page">
                                                        <a href="">{artist.creater.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    {manga.tagResponse.GENRE && <>
                                        <div className="w-fit">
                                            <div className="text-base font-bold mb-2">Genres</div>
                                            <div className="flex gap-2">
                                                {manga.tagResponse.GENRE.map((tag, index) => {
                                                    return (
                                                        <div key={index} className="tag-manga-page">{tag.name}</div>
                                                    )

                                                })}
                                            </div>
                                        </div>
                                    </>}
                                    {manga.tagResponse.THEME && <>
                                        <div className="w-fit">
                                            <div className="text-base font-bold mb-2">Theme</div>
                                            <div className="flex gap-2">
                                                {manga.tagResponse.THEME.map((tag, index) => {
                                                    return (
                                                        <div key={index} className="tag-manga-page">{tag.name}</div>
                                                    )

                                                })}
                                            </div>
                                        </div>
                                    </>}
                                    {manga.tagResponse.FORMAT && <>
                                        <div className="w-fit">
                                            <div className="text-base font-bold mb-2">Format</div>
                                            <div className="flex gap-2">
                                                {manga.tagResponse.FORMAT.map((tag, index) => {
                                                    return (
                                                        <div key={index} className="tag-manga-page">{tag.name}</div>
                                                    )

                                                })}
                                            </div>
                                        </div>
                                    </>}

                                    {manga.tagResponse.DEMOGRAPHIC && <>
                                        <div className="w-fit">
                                            <div className="text-base font-bold mb-2">Demographic</div>
                                            <div className="flex gap-2">
                                                {manga.tagResponse.DEMOGRAPHIC.map((tag, index) => {
                                                    return (
                                                        <div key={index} className="tag-manga-page">{tag.name}</div>
                                                    )

                                                })}
                                            </div>
                                        </div>
                                    </>}

                                    <div className="w-full">
                                        <div className="text-base font-bold mb-2">Alternative Titles</div>
                                        <div className="flex gap-2 flex-col ">
                                            {manga.altTitleResponse.map((altTitle, index) => {
                                                return (
                                                    <div key={index} className="rounded w-full px-1">
                                                        <img className="inline-block mr-2" title={altTitle.language} src={altTitle.flag} alt="Japanese flag icon" width="24" height="24"></img>
                                                        <div className="inline-block text-base">{altTitle.title}</div>
                                                        <hr className="border-none h-[1px] bg-[--background-tag]" />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="content mt-10">
                                <div className="nav-tab font-bold flex p-1 bg-[--color-accent] w-fit items-center gap-4 rounded">
                                    <div className="px-2 py-1 bg-slate-500 bg-[--background-tag] rounded">Chapters</div>
                                    <div className="px-2 py-1 text-[--text-gray]">Comments (21)</div>
                                    <div className="px-2 py-1 text-[--text-gray]">Art</div>
                                </div>
                                <div className="nav-mark-order my-5 flex justify-between">
                                    <div className="mark-over block-common">Descending</div>
                                    <div className="flex justify-between">
                                        <div className="mark-over mr-2 block-common">Mark all on page as unread</div>
                                        <div className="mark-over block-common">Index</div>
                                    </div>
                                </div>

                                <div className="dynamic-content">
                                    <div className="dynamic-content-item">
                                        <div className="header-dynamic-content-item">
                                            <div className="flex justify-between text-base font-semibold tracking-wider">
                                                <div>No Volume</div>
                                                <div>Ch. 64 -69</div>
                                                <div>
                                                    <span>6</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="fill-white w-4 h-4 inline-block ml-1" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" /></svg>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="list-chapter">
                                            <ul>
                                                {manga.chapters.map((chapter, index) => {
                                                    return (
                                                        <li key={index} className=" chapter flex justify-between bg-[--background-chapter] h-[52px] rounded px-3 py-1 mb-2">
                                                            <div>
                                                                <div className="flex items-center font-bold">
                                                                    <svg data-v-9ba4cb7e data-v-c031ce93 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className=" cursor-pointer mr-2 opacity-40"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.9 4.24A9 9 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3.001 3.001 0 0 1-5.194-2.098A3 3 0 0 1 9.88 9.88m8.06 8.06A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94zM1 1l22 22" /></svg>
                                                                    <img className="inline-block mr-2" title="Japanese" src={`${chapter.language}`} alt="Japanese flag icon" width="22" height="22"></img>
                                                                    Ch.{chapter.chapterNumber} - {chapter.name}</div>
                                                            </div>
                                                            <div className="w-[160px]">
                                                                <div className="float-left">
                                                                    <div className="flex items-center gap-1">
                                                                        <svg data-v-9ba4cb7e data-v-c031ce93 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-clock icon small text-icon-contrast text-undefined mr-0.5 md:mr-1" viewBox="0 0 24 24"><circle cx={12} cy={12} r={10} /><path d="M12 6v6l4 2" /></svg>
                                                                        {chapter.releaseDate}</div>
                                                                    <div className="flex items-center gap-1 ">
                                                                        <svg data-v-9ba4cb7e data-v-514756c3 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>
                                                                        <div className="text-blue-400">
                                                                            {chapter.user.firstname}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            }

        </>




    )
}
