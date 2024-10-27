"use client";
import React from 'react'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import RecentlyAddedCarousel from './RecentlyAddedCarousel';
import SelectGroupModal from '../Modal/SelectGroupModal';

export default function ContentHomePage({ isSidebarOpen, toggleSidebar, openModal}) {

  return (
    <div className={`content-home-page-container absolute top-0 left-0 w-full  ${isSidebarOpen ? 'pl-[256px] largepc::pl-0' : 'right-side-expand'} `}>

      {/* Header */}
      <div className="homepage-header w-full h-[440px] relative ">
        <Carousel autoplay={true} loop={true} className="">
          <div className="carousel-item mx-auto  px-8 mt-2 max-w-[1440px] pt-[56px] flex justify-center">
            <div className="banner z-[-10] absolute top-0 left-0 bg-red-200 w-full  h-[440px] opacity-25 ">
              <Image className=" w-full h-full object-cover"
                src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className="carousel-item-container w-full grid grid-cols-[200px_1fr] gap-8 z-10">
              <div className="image-manga w-[215px] row-span-4 h-[306px]">
                <Image className="rounded"
                  src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="name-manga flex flex-col h-[216px] gap-3 overflow-hidden">
                <div className="largepc:text-7xl tablet:text-[4vw] laptop:text-[3vw] desktop:text-[2vw] font-bold text-ellipsis overflow-hidden">Hirayasumieeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
                <div className="manga-info h-[18px] flex flex-wrap items-center gap-3 ">
                  <div className="list-of-tags flex flex-wrap gap-3 font-bold text-[10px] ">
                    <div className="tag bg-[--background-chapter] rounded px-1">
                      <a href="">Comedy</a>
                    </div>
                    <div className="tag bg-[--background-chapter] rounded px-1">
                      <a href="">Drama</a>
                    </div><div className="tag bg-[--background-chapter] rounded px-1">
                      <a href="">Slice of life</a>
                    </div>
                  </div>

                </div>
                <div className="description grow">29-year-old freeter Ikuta Hiroto is a carefree young man without a love life, regular job, or any real worries about the future. He inherits an old house from the neighbourhood granny, where his 18-year-old cousin, Natsumi moves in with him to study art in Tokyo. This is a story about Hiroto and the people around him who struggle with life.</div>
              </div>
              <div className="text-lg">Shinzou Keigo</div>

            </div>


          </div>
        </Carousel>
      </div>

      <div className="homepage-body px-8 py-[56px] max-w-[1440px] mx-auto">

        {/* Lastest Updates */}
        <div>
          <div className="text-2xl font-bold py-3">Latest updates</div>
          <div className="box-last-update mt-2 grid gap-4 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 largepc:grid-cols-4">
            <div className="p-4 bg-[--background-tag] rounded flex flex-col gap-4">
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
            </div>
            <div className="p-4 bg-[--background-tag] rounded hidden laptop:block">
              <div className="item-latest-update flex  gap-2">
                <div className="cover-img-item-latest-update">
                  <Image className=""
                    src={"/27f28108-8074-444b-9e0b-ffb525b0a5de.jpg.512.jpg"}
                    alt="Picture of the author"
                    width={56}
                    height={80}
                    quality={100}
                  />
                </div>
                <div className="detail-item-lastest-update grow flex flex-col justify-center">
                  <div className="font-bold">My Wife Is From a Thousand Years Ago</div>
                  <div>
                    <img className="inline-block mr-2" title="Japanese" src="/jp.svg" alt="Japanese flag icon" width="20" height="20"></img>

                    Ch. 46</div>
                  <div className="flex justify-between text-sm" >
                    <div> Niệm Lan Chân Nhân</div>
                    <div> 16 seconds ago</div>
                  </div>
                </div>


              </div>
            </div>
            <div className="hidden desktop:block">03</div>
            <div className="hidden largepc:block">04</div>
          </div>
        </div>
        {/* Recently Added */}
        <div className="py-10">
          <div className="text-2xl font-bold">Recently Added</div>
          <RecentlyAddedCarousel openModal ={openModal}/>
        </div>

       {/* Staff Picks */}
       <div className="py-10">
          <div className="text-2xl font-bold">Staff Picks</div>
          <RecentlyAddedCarousel openModal ={openModal}/>
        </div>
      </div>

    </div>

  )
}
