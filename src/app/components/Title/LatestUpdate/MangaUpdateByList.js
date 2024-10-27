import Image from 'next/image'
import React from 'react'

export default function MangaUpdateByList() {
    return (
        <div className="list-manga-update">
            <div className="item-list-manga-update">
                <div className="img-manga ">
                    <Image className="w-[140px] rounded"
                        src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="detail-manga-update grow">
                    <div className="flex items-center px-1">
                        <div>
                            <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                        </div>
                        <div className='manga-update-name font-bold'>R402</div>
                    </div>
                    <hr className="border-none h-[1px] bg-purple-100 my-2 " />
                    <div className="list-chapter-update px-2 text-[14px]">
                        <div className="item-list-chapter-update flex justify-between">
                            <div>
                                <div className="font-bold">
                                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>


                                    Vol.3 Ch.17</div>
                                <div>Amotor Malle</div>
                            </div>
                            <div>
                                <div>6 minutes ago</div>
                                <div>Amotor Malle</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
            <div className="item-list-manga-update">
                <div className="img-manga ">
                    <Image className="w-[140px] rounded"
                        src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="detail-manga-update grow">
                    <div className="flex items-center px-1">
                        <div>
                            <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                        </div>
                        <div className='manga-update-name font-bold'>R402</div>
                    </div>
                    <hr className="border-none h-[1px] bg-purple-100 my-2 " />
                    <div className="list-chapter-update px-2 text-[14px]">
                        <div className="item-list-chapter-update flex justify-between">
                            <div>
                                <div className="font-bold">
                                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>


                                    Vol.3 Ch.17</div>
                                <div>Amotor Malle</div>
                            </div>
                            <div>
                                <div>6 minutes ago</div>
                                <div>Amotor Malle</div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
