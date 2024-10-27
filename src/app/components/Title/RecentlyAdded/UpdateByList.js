import Image from 'next/image'
import React from 'react'

export default function UpdateByList() {
    return (
        <div className="list-manga-update">
            <div className="item-list-manga-update">
                <div className="img-manga ">
                    <Image className="w-[84px] rounded"
                        src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                    />
                </div>
                <div className="detail-manga-update grow">
                    <div className="flex justify-between w-full">
                        <div className='w-full'>
                            <div className="flex w-full items-center justify-between px-1">
                                <div className="flex items-center px-1 mb-2">
                                    <div>
                                        <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                                    </div>
                                    <div className='manga-update-name font-bold'>R402</div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex rating-recently-added gap-1">
                                            <div className="flex items-center gap-1" >
                                                <div>
                                                    <svg data-v-9ba4cb7e data-v-898463ba xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-star icon rel" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" /></svg>
                                                </div>
                                                <div>
                                                    8.04
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1" >
                                                <div>
                                                    <svg data-v-9ba4cb7e data-v-898463ba xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-star icon rel" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>
                                                </div>
                                                <div>
                                                    8
                                                </div>
                                            </div>
                                        </div>
                                        <div className="status-recently-added flex items-center gap-1.5">
                                            <div className=" w-2 h-2 bg-blue-200 rounded-full"></div>
                                            Completed
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="tag-recently-added">
                                    suggestive
                                </div>
                                <div className="tag-recently-added">
                                    oneshot
                                </div>
                                <div className="tag-recently-added">
                                    romance
                                </div>
                            </div>
                        </div>


                    </div>



                </div>
            </div>
        </div>
    )
}
