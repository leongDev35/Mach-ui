import Image from 'next/image'
import React from 'react'

export default function UpdateByListCover() {
    return (
        <div className="list-manga-update grid grid-cols-2 largepc:grid-cols-6 desktop:grid-cols-5 laptop:grid-cols-4 tablet:grid-cols-3  gap-2">
            <div className="item-added-by-cover relative h-fit">
                <div className="img-manga">
                    <Image className="rounded w-full h-full"
                        src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}

                    />
                </div>
                <div className='manga-update-name-cover absolute bottom-0 left-0 w-full h-1/2'>

                    <div className='absolute bottom-0 left-0 w-full p-3 text-[14px] '>

                        <div className="w-full text-wrap">
                            <div className="inline-block">
                                <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="24" height="24"></img>
                            </div>
                            Hirasumisddddddddddddddddddddddddddddddddddddddddddd
                        </div>
                    </div>

                </div>



            </div>
            <div className="item-added-by-cover">
                <div className="img-manga ">
                    <Image className="rounded"
                        src={"/1-86241a5cadbb01627302f4656090520e98468e481da46779da6704318ab9a8eb.png"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}

                    />
                </div>

            </div>
            <div className="item-added-by-cover">
                <div className="img-manga ">
                    <Image className="rounded"
                        src={"/1-86241a5cadbb01627302f4656090520e98468e481da46779da6704318ab9a8eb.png"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}

                    />
                </div>

            </div>
            <div className="item-added-by-cover">
                <div className="img-manga ">
                    <Image className="rounded"
                        src={"/1-86241a5cadbb01627302f4656090520e98468e481da46779da6704318ab9a8eb.png"}
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        quality={100}

                    />
                </div>

            </div>
        </div>
    )
}
