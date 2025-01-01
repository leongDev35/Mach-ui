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
                            {manga.altTitles.map((item, index) => (
                                // Với <React.Fragment>, bạn có thể trả về nhiều phần tử mà không cần bao bọc chúng trong một thẻ HTML
                                <React.Fragment key={item.id}>
                                    {item.title}
                                    {index < manga.altTitles.length - 1 && ", "}
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
                                                    <div key={index} className="text-xs bg-[--background-tag] rounded px-1">
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
                                                    <div key={index} className="text-xs bg-[--background-tag] rounded px-1">
                                                        <a href="">{artist.creater.name}</a>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Genres</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Comedy</div>
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Drama</div>
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Slice of Life</div>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Demographic</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Seinen</div>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Read or Buy</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Offical Raw</div>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Track</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">MangaUpdates</div>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="text-base font-bold mb-2">Alternative Titles</div>
                                        <div className="flex gap-2 flex-col ">
                                            <div className="bg-[--background-tag] rounded w-fit px-1">
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                <div className="inline-block text-base">ひらやすみ</div>

                                            </div>
                                            <div className="bg-[--background-tag] rounded w-fit px-1">
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                <div className="inline-block text-base">हिरा यासुमी</div>

                                            </div>
                                            <div className="bg-[--background-tag] rounded w-fit px-1">
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                <div className="inline-block text-base">Хіраясумі</div>

                                            </div>
                                            <div className="bg-[--background-tag] rounded w-fit px-1">
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                <div className="inline-block text-base">Хираясуми</div>

                                            </div>
                                            <div className="bg-[--background-tag] rounded w-fit px-1">
                                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                                <div className="inline-block text-base">Жизнь в одноэтажном доме</div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-xs bg-[--background-tag] rounded px-1 w-fit mx-auto flex">
                                <svg data-v-9ba4cb7e xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-current rotate-180 mx-1" viewBox="0 0 24 24"><path d="m7 13 5 5 5-5M7 6l5 5 5-5" /></svg>
                                See less
                                <svg data-v-9ba4cb7e xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-current rotate-180 mx-1" viewBox="0 0 24 24"><path d="m7 13 5 5 5-5M7 6l5 5 5-5" /></svg>

                            </div>

                            <div className="content mt-10">
                                <div className="nav-tab font-bold flex p-1 bg-[--background-tag] w-fit items-center gap-4 rounded">
                                    <div className="px-2 py-1 bg-slate-500 rounded">Chapters</div>
                                    <div className="px-2 py-1 ">Comments (21)</div>
                                    <div className="px-2 py-1">Art</div>
                                </div>
                                <div className="nav-mark-order my-5 flex justify-between">
                                    <div className="mark-over">Descending</div>
                                    <div className="flex justify-between">
                                        <div className="mark-over mr-2">Mark all on page as unread</div>
                                        <div className="mark-over">Index</div>
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
                                                <li className=" chapter flex justify-between bg-[--background-chapter] rounded px-3 py-1 mb-2">
                                                    <div>
                                                        <div>Ch.69 - August 31</div>
                                                        <div>Tsubame Club</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <div>last month</div>
                                                            <div>shisa-shisa</div>
                                                        </div>
                                                        <div className="ml-16">
                                                            <div>N/A</div>
                                                            <div>34</div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className=" chapter flex justify-between bg-[--background-chapter] rounded px-3 py-1 mb-2">
                                                    <div>
                                                        <div>Ch.69 - August 31</div>
                                                        <div>Tsubame Club</div>
                                                    </div>
                                                    <div className="flex">
                                                        <div>
                                                            <div>last month</div>
                                                            <div>shisa-shisa</div>
                                                        </div>
                                                        <div className="ml-16">
                                                            <div>N/A</div>
                                                            <div>34</div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

        </>




    )
}
