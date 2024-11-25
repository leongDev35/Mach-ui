"use client"
import React, { useEffect, useRef, useState } from 'react'
import SelectInput from './Metadata/SelectInput'
import ContentOriginalLang from './Metadata/ContentOriginalLang';
import ContentInside from './Metadata/ContentInside';
export default function Metadata({ nations }) {
    const [tickCheckbox, setTickCheckbox] = useState(false);
    const [originalLang, setOriginalLang] = useState(null);
    const [contentRating, setContentRating] = useState(null);
    const [publicationStatus, setPublicationStatus] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownRatingOpen, setIsDropdownRatingOpen] = useState(false);
    const [isDropdownStatusOpen, setIsDropdownStatusOpen] = useState(false);
    const dropdownLangRef = useRef(null);
    const dropdownRatingRef = useRef(null);
    const dropdownStatusRef = useRef(null);


    const updateNation = (newNation) => {
        setOriginalLang(newNation);         // Cập nhật lại state
        setIsDropdownOpen(!isDropdownOpen);

    };

    const updateRating = (rating) => {
        setContentRating(rating);         // Cập nhật lại state
        setIsDropdownRatingOpen(!isDropdownRatingOpen);

    };

    const updateStatus = (status) => {
        setPublicationStatus(status);         // Cập nhật lại state
        setIsDropdownStatusOpen(!isDropdownStatusOpen);

    };


    // Đóng dropdown khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownLangRef.current && !dropdownLangRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
            if (dropdownRatingRef.current && !dropdownRatingRef.current.contains(event.target)) {
                setIsDropdownRatingOpen(false);
            }
            if (dropdownStatusRef.current && !dropdownStatusRef.current.contains(event.target)) {
                setIsDropdownStatusOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const ratings = ["Safe", "Suggestive", "Erotica", "Pornographic"];
    const status = ["Ongoing", "Completed", "Hiatus", "Cancelled"];
    return (
        <div className='create-part'>
            <div className="flex items-center gap-2 cursor-pointer select-none mb-3" onClick={() => {
                setTickCheckbox(!tickCheckbox)
            }}>
                <div>

                    {tickCheckbox ?

                        <svg data-v-9ba4cb7e data-v-e5d18c36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined">
                            <path className="" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            <path className="text-[--color-pink-purple]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 11 3 3L22 4" />

                        </svg>
                        :

                        <svg data-v-9ba4cb7e data-v-e5d18c36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-square icon text-icon-contrast text-undefined" viewBox="0 0 24 24">
                            <rect className="" width={18} height={18} x={3} y={3} rx={2} ry={2} />
                        </svg>

                    }

                </div>

                <div className="">
                    Sync authors and artists
                </div>
            </div>
            <div className="detail-title-item ">
                <div className="detail-title-item-header">Authors<span className="text-red-500">*</span></div>
                <div className='relative'>
                    <input
                        className="input-create-page text-sm w-full rounded pr-2 pl-14 py-2 bg-[--sidebar-background]"
                        // value={}
                        // onChange={(e) => {

                        //     // handleInputChange(e, setInputValueSearchTags)
                        // }} 
                        placeholder={"Find author"}
                    />
                    <div className="absolute top-2 left-0 px-3">
                        <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
                    </div>
                </div>

            </div>
            <div className="detail-title-item ">
                {tickCheckbox ?
                    <>
                        <div className="detail-title-item-header flex ">Artists
                            <div>
                                <svg data-v-9ba4cb7e data-v-bb10d586 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-link-2 icon text-icon-contrast text-undefined ml-2" viewBox="0 0 24 24"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3m-1 5h8" /></svg>

                            </div>
                        </div>
                    </> :
                    <>
                        <div className="detail-title-item-header">Artists
                            <span className="text-red-500">*</span>
                        </div>
                        <div className='relative'>
                            <input
                                className="input-create-page text-sm w-full rounded pr-2 pl-14 py-2 bg-[--sidebar-background]"
                                // value={}
                                // onChange={(e) => {

                                //     // handleInputChange(e, setInputValueSearchTags)
                                // }} 
                                placeholder={"Find author"}
                            />
                            <div className="absolute top-2 left-0 px-3">
                                <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
                            </div>
                        </div>
                    </>}
            </div>
            <div className="detail-title-item ">

                <div className="detail-title-item-header">Original Language
                    <span className="text-red-500">*</span>
                </div>
                <SelectInput
                    nations={nations}
                    dropdownRef={dropdownLangRef}
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    selectedItem={originalLang}
                    componentSelectArray={<ContentOriginalLang nations={nations} updateNation={updateNation} />}
                    translatedLabel={"Original Language"}
                    placeholder={"Select Language"}></SelectInput>
            </div>

            <div className="detail-title-item ">

                <div className="detail-title-item-header">Content Rating
                    <span className="text-red-500">*</span>
                </div>
                <SelectInput
                    nations={nations}
                    dropdownRef={dropdownRatingRef}
                    isDropdownOpen={isDropdownRatingOpen}
                    selectedItem={contentRating}
                    setIsDropdownOpen={setIsDropdownRatingOpen}
                    componentSelectArray={<ContentInside names={ratings} updateSelectedItem={updateRating} />}
                    translatedLabel={"Content Rating"}
                    placeholder={"Select Rating"}
                ></SelectInput>
            </div>

            <div className="detail-title-item ">

                <div className="detail-title-item-header">Publication Status
                    <span className="text-red-500">*</span>
                </div>
                <SelectInput
                    nations={nations}
                    dropdownRef={dropdownStatusRef}
                    isDropdownOpen={isDropdownStatusOpen}
                    selectedItem={publicationStatus}
                    setIsDropdownOpen={setIsDropdownStatusOpen}
                    componentSelectArray={<ContentInside names={status} updateSelectedItem={updateStatus} />}
                    translatedLabel={"Publication Status"}
                    placeholder={"Select Status"}
                ></SelectInput>
            </div>
        </div>
    )
}
