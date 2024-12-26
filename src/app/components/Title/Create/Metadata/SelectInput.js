"use client"
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

export default function SelectInput({ dropdownRef, isDropdownOpen, selectedItem, setIsDropdownOpen, translatedLabel, placeholder, componentSelectArray }) {

    return (

        <div className='cursor-pointer relative' onClick={() => {
            setIsDropdownOpen(!isDropdownOpen);
        }} ref={dropdownRef}>
            <div tabIndex="0" className="select-input-create text-sm w-full rounded px-5 py-2 bg-[--sidebar-background] flex justify-between items-center">
                <div className='relative grow'>
                    <div className={`translated-label ${isDropdownOpen && !selectedItem ? 'translate-y-[-22px] text-xs' : 'opacity-0 translate-y-0 text-base'}`}>{translatedLabel}</div>

                    {selectedItem ? <>
                        {selectedItem.name ? <>
                            <div className='flex items-center'>
                                <Image
                                    src={selectedItem.flag}
                                    alt={`${selectedItem.name} flag`}
                                    width={30}
                                    height={20}
                                />
                                <span style={{ marginLeft: '10px' }}>{selectedItem.name}</span>
                            </div>
                        </> : <>
                        <div className='flex items-center'>
                                <span style={{ marginLeft: '10px' }}>{selectedItem}</span>
                            </div>
                        </>}

                    </> : <>
                        <div className={`faded-placehoder ${isDropdownOpen ? 'translate-y-[8px] text-[--text-gray]' : 'translate-y-0 '}`}>{placeholder}</div>
                    </>}
                </div>

                <div className="w-8">
                    <svg data-v-9ba4cb7e data-v-c7ac6a42 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon text-icon-contrast text-undefined chevron ml-1 flex-shrink-0 my-4" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                </div>
            </div>
            {isDropdownOpen && (<div className='dropdown-original-lang w-full bg-[--sidebar-background] rounded absolute top-[60px] z-20'>
                {/* Dropdown body */}
                {componentSelectArray}
            </div>)}
        </div>

    )
}
