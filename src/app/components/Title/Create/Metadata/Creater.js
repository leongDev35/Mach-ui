"use client"
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import DropDownCreater from './DropDownCreater';
import CreaterModal from './CreaterModal';
import SectionForAddingCreater from './SectionForAddingCreater';

export default function Creater({ setListAuthor, setListArtist, listAuthor, listArtist }) {
    const [tickCheckbox, setTickCheckbox] = useState(false);
    const [artistName, setArtistName] = useState("");
    const [authortName, setAuthorName] = useState("");
    const [listFoundAuthor, setListFoundAuthor] = useState("");
    const [listFoundArtist, setListFoundArtist] = useState("");
    const [isDropdownFindArtistOpen, setIsDropdownFindArtistOpen] = useState(false);
    const [isDropdownFindAuthorOpen, setIsDropdownFindAuthorOpen] = useState(false);
    const dropdownFindArtistRef = useRef(null);
    const dropdownFindAuthorRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownFindAuthorRef.current && !dropdownFindAuthorRef.current.contains(event.target)) {
                setIsDropdownFindAuthorOpen(false);
            }
            if (dropdownFindArtistRef.current && !dropdownFindArtistRef.current.contains(event.target)) {
                setIsDropdownFindArtistOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);



    const handleRemoveCreater = (name, setListCreaterName) => {
        setListCreaterName((prev) => prev.filter((author) => author !== name));
    };

    const handleInputChange = (e, setFunc, setFuncDropdown, setListFoundCreater, listCreater) => {
        const value = e.target.value.trim();
        setFunc(e.target.value);

        if (value) {
            setFuncDropdown(true);
            loadListAuthorByName(value, setListFoundCreater, listCreater);
        } else {
            setListFoundCreater([]);
            setFuncDropdown(false);
        }
    }

    const loadListAuthorByName = async (name, setListFoundCreater, listCreater) => {
        try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/creaters/search`, {
                params: {
                    name: name,
                },
            });
            // filter list
            const filteredList = response.data.filter(
                (artist) => !listCreater.includes(artist.name)
            );

            setListFoundCreater(filteredList)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
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
                {/* Label for the sync authors and artists */}
                <div className="">
                    Sync authors and artists
                </div>
            </div>
            {/* Section for adding authors */}

            <SectionForAddingCreater
                title="Authors"
                placeholder="Find author"
                dropdownRef={dropdownFindAuthorRef}


                createrValue={authortName}
                setCreaterValue={setAuthorName}
                selectedCreaters={listAuthor}

                handleRemoveCreater={handleRemoveCreater}
                handleInputChange={handleInputChange}
                // dropdown
                isDropdownOpen={isDropdownFindAuthorOpen}

                listFoundAuthor={listFoundAuthor}
                setListFoundCreater={setListFoundAuthor}
                setListAuthorName={setListAuthor}
                setIsDropdownOpen={setIsDropdownFindAuthorOpen}
            ></SectionForAddingCreater>




            {/* Section for adding artists */}


            {tickCheckbox ?
                <>
                    <div className="detail-title-item ">
                        <div className="detail-title-item-header flex ">Artists
                            <div>
                                <svg data-v-9ba4cb7e data-v-bb10d586 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-link-2 icon text-icon-contrast text-undefined ml-2" viewBox="0 0 24 24"><path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3m-1 5h8" /></svg>

                            </div>
                        </div>
                    </div>
                </> :

                <SectionForAddingCreater
                    title="Artists"
                    placeholder="Find artists"
                    dropdownRef={dropdownFindArtistRef}


                    createrValue={artistName}
                    setCreaterValue={setArtistName}
                    selectedCreaters={listArtist}

                    handleRemoveCreater={handleRemoveCreater}
                    handleInputChange={handleInputChange}
                    // dropdown
                    isDropdownOpen={isDropdownFindArtistOpen}
                    setListFoundCreater={setListFoundArtist}
                    listFoundAuthor={listFoundArtist}
                    setListAuthorName={setListArtist}
                    setIsDropdownOpen={setIsDropdownFindArtistOpen}
                ></SectionForAddingCreater>
            }



        </>
    )
}
