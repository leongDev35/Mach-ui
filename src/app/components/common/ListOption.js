"use client"
import React, { useRef, useState } from 'react'

export default function ListOption({setSelectOption, listItems}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const [isShaking, setIsShaking] = useState(false); // Biến để điều khiển hiệu ứng rung
    const [leftPosition, setLeftPosition] = useState(0);
    const [translateX, setTranslateX] = useState(0);


    // console.log(translateX);
    // console.log(leftPosition);
    
    
    const handleClick = (index, option) => {
        // setActiveIndexNew(index);
        setSelectOption(option);
        console.log((index - activeIndex) * 100);
        
        setTranslateX((index - activeIndex) * 100);
        setActiveIndex(index);
        setIsShaking(false); // Tắt rung trước khi bắt đầu dịch chuyển
    };

    // Khi kết thúc dịch chuyển, bật hiệu ứng rung
    const handleTransitionEnd = (index) => {
        setLeftPosition(index * 44);
        setTranslateX(0);
        setIsShaking(true); // Kích hoạt rung sau khi dịch chuyển xong
    };

    return (
        <>
            <div className="flex justify-end">
                <div className="option-for-list relative">
                    {listItems.map((item, index) => (


                        <div key={index} className={`option-detail `} onClick={() => handleClick(index, item.option)}>
                            <svg data-v-9ba4cb7e data-v-8fc5a17e xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.d} /></svg>

                        </div>


                    ))}
                    <div className={`slider-option slider ${isShaking ? "shake" : ""}`} style={{
                        transform: `translateX(${translateX}%)`,
                        left: `${leftPosition}px`,
                    }}
                        onTransitionEnd={() => handleTransitionEnd(activeIndex)}
                    >

                    </div>

                </div>
            </div>


        </>

    )
}
