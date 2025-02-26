"use client";
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "green" }}
            onClick={onClick}
        />
    );
}
export default function RecentlyAddedCarousel({ openModal, recentlyAddedManga, setFirstChapterList }) {
    console.log(recentlyAddedManga);

    const settings = {
        dots: true, //! phải đủ số lượng items mới hiện
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // autoplay: true,
        pauseOnFocus: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div
                style={{
                    padding: "10px",
                    bottom: "-54px"

                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }

        ]
    };
    return (
        <div className="list-items-recently-added ">
            <Slider {...settings}>

                {recentlyAddedManga.length > 0 && recentlyAddedManga.map((manga, index) => {
                    return (
                        <div key={index} className="item-recently-added hover:cursor-pointer ">
                            <div className="cover-img-item ">
                                <div className="image-manga w-full row-span-4 h-full relative rounded overflow-hidden">
                                    <img src={manga.manga.coverImage} alt="Picture of the author" className="w-full h-full" />
                                    <div className="cover-item-recently-added rounded w-full h-full absolute top-0 left-0 bg-black opacity-70">

                                    </div>
                                    <div className="detail-cover-item-recently-added rounded w-full h-full absolute top-0 left-0 flex flex-col justify-between p-5">
                                        <div className="bio-cover-item w-full max-h-[210px] h-[210px] overflow-y-scroll text-white text-sm ">
                                                {manga.manga.description}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="button-read-cover  bg-[--color-pink-purple] p-4 w-[137px] h-[40px] rounded-full text-[15px] flex  items-center font-bold" onClick={() => {
                                                openModal();
                                                setFirstChapterList(manga.firstChapterList);
                                            }}>
                                                <div className="logo-button-read-cover">
                                                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-book-open icon mr-4" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>

                                                </div>
                                                <div>Read</div>
                                            </div>
                                            <div className="bg-[--background-tag] w-[40px] h-[40px] rounded-full flex items-center ">
                                                <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-arrow-right icon m-auto" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M5 12h14m-7-7 7 7-7 7" /></svg>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                        </div>)
                })}



            </Slider>
        </div>
    )
}
