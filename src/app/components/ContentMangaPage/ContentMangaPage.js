import Image from "next/image";

export default function ContentMangaPage({ isSidebarOpen }) {

    return (
                <div className="title-manga grid grid-cols-[200px_auto] gap-4">
                    <div className="banner z-[-10] absolute top-[calc(-1*var(--navbar-height))] left-0 bg-red-200 w-full h-[500px] blur-sm opacity-25">
                        <Image className="rounded w-full h-[500px] object-cover"
                            src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                            alt="Picture of the author"
                            width={100}
                            height={500}
                        />
                    </div>
                    <div className="banner-cut z-[-10] absolute top-[283px] left-0 bg-[--background] w-full h-[500px] opacity-90">

                    </div>

                    <div className="image-manga row-span-4 h-[370px]">
                        <Image className="rounded"
                            src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                            alt="Picture of the author"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="name-manga flex flex-col h-[216px]">
                        <div className="text-7xl font-bold">Hirayasumi</div>
                        <div className="text-xl grow">ひらやすみ</div>
                        <div className="text-lg">Shinzou Keigo</div>
                    </div>
                    <div className="title-button flex h-12 gap-2">
                        <div className="button-status h-full w-56 bg-white"></div>
                        <div className="button-favorite bg-white w-[74px] h-full "></div>
                        <div className="button-option bg-white w-12"></div>
                    </div>
                    <div className="manga-info h-[18px] flex flex-wrap items-center gap-3">
                        <div className="list-of-tags flex flex-wrap gap-3 text-[10px]">
                            <div className="tag bg-[--background-tag] rounded px-1">
                                <a href="">Comedy</a>
                            </div>
                            <div className="tag bg-[--background-tag] rounded px-1">
                                <a href="">Drama</a>
                            </div><div className="tag bg-[--background-tag] rounded px-1">
                                <a href="">Slice of life</a>
                            </div>
                        </div>
                        <div className="date-publication-and-status flex items-center gap-1">
                            <div className="dot-status w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs font-semibold">Publication: 2021, Ongoing</span>
                        </div>
                    </div>
                    <div className="col-span-full">29-year-old freeter Ikuta Hiroto is a carefree young man without a love life, regular job, or any real worries about the future. He inherits an old house from the neighbourhood granny, where his 18-year-old cousin, Natsumi moves in with him to study art in Tokyo. This is a story about Hiroto and the people around him who struggle with life.</div>
                    <div className="detail-manga col-span-full">
                        <div className="detail-manga-container flex flex-col">
                            <div className="synopsis mb-10">
                                <div className="flex gap-5 flex-wrap">
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Author</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Shinzou Keigo</div>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className="text-base font-bold mb-2">Artist</div>
                                        <div className="flex gap-2">
                                            <div className="text-xs bg-[--background-tag] rounded px-1">Shinzou Keigo</div>
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

        

    )
}
