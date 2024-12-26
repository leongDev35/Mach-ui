'use client'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'

export default function Title({ nations, name, setName, description,setDescription, handleInputChange,listAltTitles, setListAltTitles }) {

    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
    const lastInputRef = useRef(null);
    const dropdownRef = useRef(null);

    // Đóng dropdown khi nhấn bên ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {

            if (dropdownRef.current && !dropdownRef.current.contains(event.target)
                &&
                !event.target.closest(`#nationbox-${openDropdownIndex}`)
            ) {
                setOpenDropdownIndex(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [openDropdownIndex]);



    const handleAddAltTitle = () => {
        setListAltTitles((prev) => {
            const updatedList = [...prev, { nation: null, title: "" }];
            setTimeout(() => {
                if (lastInputRef.current) {
                    lastInputRef.current.focus(); // Focus vào input cuối sau khi render
                }
            }, 0);
            return updatedList;
        });
    }

    const updateTitle = (index, newTitle) => {
        const updatedList = [...listAltTitles]; // Tạo một bản sao của mảng
        updatedList[index].title = newTitle;   // Cập nhật title tại index
        setListAltTitles(updatedList);        // Cập nhật lại state
    };
    const updateNation = (index, newNation) => {
        const updatedList = [...listAltTitles]; // Tạo một bản sao của mảng
        updatedList[index].nation = newNation; // Cập nhật nation tại index
        setListAltTitles(updatedList);         // Cập nhật lại state
        setOpenDropdownIndex(null); // Đóng dropdown

    };

    // Hàm xóa tiêu đề
    const removeAltTitle = (index) => {
        //! _ Đại diện cho giá trị của phần tử hiện tại trong mảng. 
        //! là một cách viết phổ biến khi bạn không sử dụng giá trị này trong hàm. Trong trường hợp này, chúng ta chỉ quan tâm đến index.
        const updatedTitles = listAltTitles.filter((_, i) => i !== index);
        setListAltTitles(updatedTitles); // Cập nhật danh sách
    };

    return (
        <div className='create-part'>
            <div className="detail-title-item">
                <div className="detail-title-item-header">Title <span className="text-red-500">*</span></div>
                <input
                    className="input-create-page text-sm w-full rounded px-2 py-2 bg-[--sidebar-background]"
                    value={name}
                    onChange={(e) => {
                        handleInputChange(e, setName)
                    }}
                    placeholder={"Title"}
                />
            </div>
            <div className="detail-title-item">
                <div className="detail-title-item-header">Description</div>
                <input
                    className="input-create-page text-sm w-full rounded px-2 py-2 bg-[--sidebar-background]"
                    value={description}
                    onChange={(e) => {
                        handleInputChange(e, setDescription)
                    }}
                    placeholder={"Description"}
                />
            </div>
            <div className="detail-title-item">
                <div className="detail-title-item-header">Alternative Titles ({listAltTitles.length})</div>
                <div className="detail-title-item-header">Other titles to add to this entry. This includes translated titles, the title in the original language and script, short titles, etc.</div>
                {listAltTitles.map((altTitle, index) => {
                    return (
                        <div key={index} className='relative'>
                            <div id={`nationbox-${index}`} className='chose-nation-box absolute h-10 top-0 left-0 flex justify-center items-center px-2 cursor-pointer'
                                onClick={() => {
                                    if (openDropdownIndex != null) {
                                        setOpenDropdownIndex(null)
                                    } else {
                                        setOpenDropdownIndex(index)
                                    }
                                }}
                            >
                                {altTitle.nation ? <>
                                    <Image
                                        src={altTitle.nation.flag}
                                        alt={`${altTitle.nation.name} flag`}
                                        width={25}
                                        height={16}
                                    />
                                </> : <>
                                    <div className="choosed-nation"></div>

                                </>}
                                <svg data-v-9ba4cb7e data-v-c3aadb04 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="arrow-icon feather feather-chevron-down icon text-icon-contrast text-undefined rotating-arrow ml-1" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                            </div>
                            <input
                                ref={index === listAltTitles.length - 1 ? lastInputRef : null}
                                className="input-create-page text-sm w-full rounded px-20 py-2 mb-2 bg-[--sidebar-background]"
                                value={altTitle.title}
                                onChange={(e) => {
                                    updateTitle(index, e.target.value)
                                }}
                                placeholder={"Alt Title"}
                            />
                            <button
                                onClick={() => removeAltTitle(index)}
                                className="px-4 py-2 text-white rounded absolute top-0 right-0"
                            >
                                <svg data-v-9ba4cb7e data-v-c3aadb04 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-trash-2 icon text-icon-contrast text-undefined cursor-pointer" viewBox="0 0 24 24"><path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m-6 5v6m4-6v6" /></svg>

                            </button>
                            {/* Dropdown */}
                            {openDropdownIndex === index && (
                                <div
                                    ref={dropdownRef}
                                    className="absolute bg-[--sidebar-background] shadow-lg border rounded w-48 top-12 left-0 z-10"
                                >
                                    {nations.map((nation, idx) => (
                                        <div
                                            key={idx}
                                            className="px-4 py-2 hover:bg-[--background-light-purple] cursor-pointer flex items-center"
                                            onClick={() => updateNation(index, nation)}
                                        >
                                            <Image
                                                src={nation.flag}
                                                alt={`${nation.name} flag`}
                                                width={30}
                                                height={20}
                                            />
                                            <span style={{ marginLeft: '10px' }}>{nation.name}</span>

                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className='button-dash-title mt-3' onClick={handleAddAltTitle}>
                    <span data-v-fa81b2e8 className="flex relative items-center justify-center font-medium select-none w-full pointer-events-none" style={{ justifyContent: 'center' }}>
                        <svg data-v-9ba4cb7e data-v-fa81b2e8 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-plus icon mr-4" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}>
                            <path d="M12 5v14m-7-7h14" /></svg>Add Alternative Title</span>
                </div>
            </div>
        </div>
    )
}
