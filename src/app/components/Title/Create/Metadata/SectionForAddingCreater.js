"use client"

import React, { useEffect, useRef, useState } from 'react'
import DropDownCreater from './DropDownCreater'
import CreaterModal from './CreaterModal'

export default function SectionForAddingCreater({
    title,
    placeholder,
    dropdownRef,

    createrValue,
    setCreaterValue,
    selectedCreaters,

    handleRemoveCreater,
    handleInputChange,

    isDropdownOpen,
    setListFoundCreater,

    setListAuthorName,
    listFoundAuthor,
    setIsDropdownOpen,

}) {

    const [isCreaterModalOpen, setIsCreaterModalOpen] = useState(false);
    //! Modal 
    const openModal = () => {
        setIsCreaterModalOpen(true);
    };
    // Hàm đóng modal
    const closeModal = () => {
        setIsCreaterModalOpen(false);

    };
    // Đóng modal khi nhấp bên ngoài modal
    const handleOutsideClick = (event) => {
        if (event.target.id === "select-group-modal") {
            closeModal();
        }
    };
    //! End Modal Func
    return (
        <div className="detail-title-item ">
            {/* Header */}
            <div className="detail-title-item-header">{title}<span className="text-red-500">*</span></div>
            <div className='relative' ref={dropdownRef}>
                {/* Input for finding authors */}
                <input
                    className="input-create-page text-sm w-full rounded pr-2 pl-14 py-2 bg-[--sidebar-background]"
                    value={createrValue}
                    onChange={(e) => {
                        handleInputChange(e, setCreaterValue, setIsDropdownOpen, setListFoundCreater, listFoundAuthor)
                    }}
                    onFocus={() => {
                        if (createrValue) {
                            setIsDropdownOpen(true)
                        }
                    }}
                    placeholder={placeholder}

                />
                {/* List of selected authors */}
                <div className="selected-authors">
                    {selectedCreaters.map((name, index) => (
                        <div key={index} className="author-tag">
                            {name}
                            {/* Button to remove a specific author */}
                            <span
                                className="remove-btn"
                                onClick={() => handleRemoveCreater(name, setListAuthorName)} // Hàm để xóa tác giả khỏi danh sách
                            >
                                ✕
                            </span>
                        </div>
                    ))}
                </div>
                {/* Search icon */}
                <div className="absolute top-2 left-0 px-3">
                    <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" />
                    </svg>
                </div>

                {/* Dropdown for search result */}
                {isDropdownOpen && (
                    <DropDownCreater
                        openModal={openModal}
                        listFoundAuthor={listFoundAuthor}
                        setListAuthorName={setListAuthorName}
                        setIsDropdownOpen={setIsDropdownOpen}
                        setAuthorName={setCreaterValue}
                    >
                    </DropDownCreater>
                )}

            </div>
            {/* Modal for creating new authors */}
            <CreaterModal
                title={title}
                isCreaterModalOpen={isCreaterModalOpen}
                closeModal={closeModal}
                handleOutsideClick={handleOutsideClick}
                newAuthor={createrValue}
                setNewAuthor={setCreaterValue}
                setListAuthorName={setListAuthorName}
                listAuthorName={selectedCreaters}
            ></CreaterModal>
        </div>
    )
}
