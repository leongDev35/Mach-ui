"use client"
import React, { useEffect, useRef, useState } from 'react'
import SelectInput from './SelectInput'
import ContentOriginalLang from './ContentOriginalLang';
import ContentInside from './ContentInside';
import PublicYear from './PublicYear';
import Creater from './Creater';
export default function Metadata({ nations, setOriginalLanguage,contentRating,publicationStatus, setPublicationStatus, setContentRating, setListAuthor, setListArtist, listAuthor, listArtist, releaseYear,
    setReleaseYear }) {
    const [originalLang, setOriginalLang] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownRatingOpen, setIsDropdownRatingOpen] = useState(false);
    const [isDropdownStatusOpen, setIsDropdownStatusOpen] = useState(false);
    const dropdownLangRef = useRef(null);
    const dropdownRatingRef = useRef(null);
    const dropdownStatusRef = useRef(null);

    
    const updateNation = (newNation) => {
        setOriginalLang(newNation);
        setOriginalLanguage(newNation.name)
        // Cập nhật lại state
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
            <Creater
                setListAuthor={setListAuthor}
                setListArtist={setListArtist}
                listAuthor={listAuthor}
                listArtist={listArtist}
            ></Creater>


            <hr className='border-[--text-gray] my-8 h-1' />

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

            <div className="detail-title-item ">

                <div className="detail-title-item-header">Publication Year
                </div>
                <PublicYear
                    placeholder={"Publication Year"}
                    setPublicYear={setReleaseYear}
                    publicYear={releaseYear}
                ></PublicYear>
            </div>
        </div>
    )
}
