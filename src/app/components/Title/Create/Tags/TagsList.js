"use client"
import React, { useState } from 'react'

export default function TagsList({ setListTags, header, tags }) {
    const [selectedTags, setSelectedTags] = useState([]);

    const handleClick = (tag) => {
        setSelectedTags((prev) => {
            // Nếu tag đã tồn tại trong danh sách, xóa nó
            if (prev.includes(tag)) {
                return prev.filter((t) => t !== tag);
            }
            // Nếu tag chưa tồn tại, thêm nó vào danh sách
            return [...prev, tag];
        });

        setListTags((prev) => {
            // Nếu tag đã tồn tại trong danh sách, xóa nó
            if (prev.includes(tag)) {
                return prev.filter((t) => t !== tag);
            }
            // Nếu tag chưa tồn tại, thêm nó vào danh sách
            return [...prev, tag];
        });

    };
    const getTagClass = (tag) => {
        return selectedTags.includes(tag) ? "include" : "normal";
    };
    return (
        <div className="mb-5" >
            <div className="tag-list-header text-lg gap-2 flex items-center mb-3">
                <div>
                    {header} ({selectedTags.length})
                </div>
                <div className="grow bg-white opacity-10 h-[1px] pl-2">
                </div>
            </div>

            <div className="list-tag max-w-[1024px]">
                {tags.map((tag, index) => (
                    <div key={index} className={`item-tag select-none cursor-pointer ${getTagClass(tag)}`} onClick={() => handleClick(tag)}>{tag}</div>
                ))}

            </div>
        </div>
    )
}
