"use client";
import React, { useEffect, useState } from 'react'
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import RecentlyAddedCarousel from './RecentlyAddedCarousel';
import SelectGroupModal from '../Modal/SelectGroupModal';
import axios from 'axios';
import Link from 'next/link';

export default function ContentHomePage({ isSidebarOpen, toggleSidebar, openModal, setFirstChapterList }) {

  const [mangaTopSlideList, setMangaTopSlideList] = useState([]);
  const [lastestUpdateManga, setLastestUpdateManga] = useState([]);
  const [recentlyAddedManga, setRecentlyAddedManga] = useState([]);
  // console.log(recentlyAddedManga);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga`);
        setMangaTopSlideList(response.data);
      } catch (err) {
        console.error(err); // Xử lý lỗi nếu xảy ra
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/chapter/latest`);
        setLastestUpdateManga(response.data);
      } catch (err) {
        console.error(err); // Xử lý lỗi nếu xảy ra
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga/recently-added`);
        setRecentlyAddedManga(response.data);
      } catch (err) {
        console.error(err); // Xử lý lỗi nếu xảy ra
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`content-home-page-container absolute top-0 left-0 w-full  ${isSidebarOpen ? 'pl-[256px] largepc::pl-0' : 'right-side-expand'} `}>

      {/* Header */}
      <div className="homepage-header w-full h-[440px] relative ">
        <Carousel autoplay={true} loop={true} className="">
          {mangaTopSlideList.length > 0 && mangaTopSlideList.map((manga, index) => (
            <div key={index} className="carousel-item relative mx-auto px-8 mt-2  pt-[56px] flex justify-center">
              <div className='box-shadow-header'></div>
              <div className="banner z-[-10] absolute top-0 left-0 w-full h-[440px] opacity-25 ">
                <Image className=" w-full h-full object-cover"
                  src={manga.coverImage}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </div>
              <div className="carousel-item-container max-w-[1440px] w-full grid grid-cols-[200px_1fr] gap-8 z-10">
                <div className="image-manga w-[215px] row-span-4 h-[306px]">
                  <Image className="rounded"
                    src={manga.coverImage}
                    alt="Picture of the author"
                    width={500}
                    height={500}
                  />
                </div>
                <div className="name-manga flex flex-col h-[216px] gap-3 overflow-hidden">
                  <div className="largepc:text-7xl tablet:text-[4vw] laptop:text-[3vw] desktop:text-[2vw] font-bold text-ellipsis overflow-hidden">{manga.name}</div>
                  <div className="manga-info h-[18px] flex flex-wrap items-center gap-3 ">
                    <div className="list-of-tags flex flex-wrap gap-3 font-bold text-[10px] ">
                      {manga.tags.map((tag, index) => (
                        <div key={index} className="tag bg-[--background-chapter] rounded px-1">
                          <a href="/">{tag.name}</a>
                        </div>
                      ))}
                    </div>

                  </div>
                  <div className="description grow">{manga.description}</div>
                </div>
                {manga.authors.map((author, index) => (
                  <div key={index} className="text-lg">{author.creater.name}</div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="homepage-body px-8 py-[56px] max-w-[1440px] mx-auto">

        {/* Lastest Updates */}
        <div>
          <div className="text-2xl font-bold py-3">Latest updates</div>
          <div className="box-last-update mt-2 grid gap-4 tablet:grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-3 largepc:grid-cols-4">
            <div className="p-4 bg-[--background-tag] rounded flex flex-col gap-4">
              {lastestUpdateManga.length > 0 && lastestUpdateManga.map((manga, index) => {
                if (index > 5) return;
                return (
                  <div key={index} className="item-latest-update flex  gap-2">
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
                      <Link href={`/titles/${manga.manga.id}/i-am-a-max-level-priestess-in-another-world`} className="font-bold">{manga.manga.name}</Link>
                      <div className="flex justify-between items-center">
                        <Link href={`/chapter/${manga.id}/1`}>
                          <img className="inline-block mr-2" title="Japanese" src={manga.language} alt="Japanese flag icon" width="20" height="20"></img>

                          Ch. {manga.chapterNumber} - {manga.name}</Link>
                        <div>
                          <svg data-v-9ba4cb7e data-v-89359c03 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm mt-1" >
                        <div className='flex gap-1'>
                          <svg data-v-9ba4cb7e data-v-c1ca7027 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined rounded mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /></svg>
                          Leo</div>
                        <div> {manga.releaseDate}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="p-4 bg-[--background-tag] rounded  flex-col gap-4 hidden laptop:flex">
              {lastestUpdateManga.length > 0 && lastestUpdateManga.map((manga, index) => {
                if (index < 6 || index > 11) return;
                return (
                  <div key={index} className="item-latest-update flex  gap-2">
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
                      <Link href={`/titles/${manga.manga.id}/i-am-a-max-level-priestess-in-another-world`} className="font-bold">{manga.manga.name}</Link>
                      <div className="flex justify-between items-center">
                        <Link href={`/chapter/${manga.id}/1`}>
                          <img className="inline-block mr-2" title="Japanese" src={manga.language} alt="Japanese flag icon" width="20" height="20"></img>

                          Ch. {manga.chapterNumber} - {manga.name}</Link>
                        <div>
                          <svg data-v-9ba4cb7e data-v-89359c03 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm mt-1" >
                        <div className='flex gap-1'>
                          <svg data-v-9ba4cb7e data-v-c1ca7027 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined rounded mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /></svg>
                          Leo</div>
                        <div> {manga.releaseDate}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="p-4 bg-[--background-tag] rounded  flex-col gap-4 hidden desktop:flex">
              {lastestUpdateManga.length > 0 && lastestUpdateManga.map((manga, index) => {
                if (index < 12 || index > 17) return;
                return (
                  <div key={index} className="item-latest-update flex  gap-2">
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
                      <Link href={`/titles/${manga.manga.id}/i-am-a-max-level-priestess-in-another-world`} className="font-bold">{manga.manga.name}</Link>
                      <div className="flex justify-between items-center">
                        <Link href={`/chapter/${manga.id}/1`}>
                          <img className="inline-block mr-2" title="Japanese" src={manga.language} alt="Japanese flag icon" width="20" height="20"></img>

                          Ch. {manga.chapterNumber} - {manga.name}</Link>
                        <div>
                          <svg data-v-9ba4cb7e data-v-89359c03 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm mt-1" >
                        <div className='flex gap-1'>
                          <svg data-v-9ba4cb7e data-v-c1ca7027 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined rounded mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /></svg>
                          Leo</div>
                        <div> {manga.releaseDate}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="p-4 bg-[--background-tag] rounded  flex-col gap-4 hidden largepc:flex">
              {lastestUpdateManga.length > 0 && lastestUpdateManga.map((manga, index) => {
                if (index < 18 || index > 23) return;
                return (
                  <div key={index} className="item-latest-update flex  gap-2">
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
                      <Link href={`/titles/${manga.manga.id}/i-am-a-max-level-priestess-in-another-world`} className="font-bold">{manga.manga.name}</Link>
                      <div className="flex justify-between items-center">
                        <Link href={`/chapter/${manga.id}/1`}>
                          <img className="inline-block mr-2" title="Japanese" src={manga.language} alt="Japanese flag icon" width="20" height="20"></img>

                          Ch. {manga.chapterNumber} - {manga.name}</Link>
                        <div>
                          <svg data-v-9ba4cb7e data-v-89359c03 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                      </div>

                      <div className="flex justify-between text-sm mt-1" >
                        <div className='flex gap-1'>
                          <svg data-v-9ba4cb7e data-v-c1ca7027 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon small text-icon-contrast text-undefined rounded mr-0.5 md:mr-1"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75" /></svg>
                          Leo</div>
                        <div> {manga.releaseDate}</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* Recently Added */}
        <div className="py-10">
          <div className="text-2xl font-bold">Recently Added</div>
          <RecentlyAddedCarousel openModal={openModal} recentlyAddedManga={recentlyAddedManga} setFirstChapterList={setFirstChapterList}/>
        </div>

        {/* Staff Picks */}
        <div className="py-10">
          <div className="text-2xl font-bold">Staff Picks</div>
          <RecentlyAddedCarousel openModal={openModal} recentlyAddedManga={recentlyAddedManga} setFirstChapterList={setFirstChapterList}/>
        </div>
      </div>

    </div>

  )
}
