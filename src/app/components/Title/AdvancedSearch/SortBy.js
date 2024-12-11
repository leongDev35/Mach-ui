"use client"
import React from 'react'

export default function SortBy({dropdownRef, turnSwitchdown, sortBy, switchDropdown,sortByOption,handleClickSortBy,turnoffSwitchdown,setSwitchDropdown  }) {
    
    return (
        <>
            <div tabIndex="0" ref={dropdownRef} className="item-filter sort-by-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    Sort by
                </div>

                {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
                <div tabIndex="0" className="input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
                    onClick={()=>{
                        turnSwitchdown(setSwitchDropdown,switchDropdown)
                    }}
                >
                    <div className="text-base font-bold">
                        {sortBy}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} classname="w-5 h-5 my-auto text-midTone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="m8 9l4-4l4 4m0 6l-4 4l-4-4" /></svg>
                    </div>
                </div>
                {/* dropdown */}
                <div id='1' className={`dropdown-filter-option-list rounded text-base w-full laptop:h-[448px] h-[246px] bg-[--background-chapter] absolute z-10 mt-1 ${!switchDropdown ? 'hidden' : 'block'}`}

                >
                    <ul className="">
                        {sortByOption.map((option, index) => (
                            <li
                                key={index}
                                className={`dropdown-filter-option-item rounded ${sortBy === option ? 'selected' : ''}`}
                                onClick={() => {
                                    handleClickSortBy(option);
                                    turnoffSwitchdown(setSwitchDropdown);
                                }}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}
