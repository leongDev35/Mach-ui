"use client"
import React, { useState } from "react";

export default function TagList({ header, tags }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [excludedTags, setExcludedTags] = useState([]);

  const handleClick = (tag) => {

    if (!selectedTags.includes(tag) && !excludedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag])
    } else if (selectedTags.includes(tag)) {
      setSelectedTags((prev) => {
        return prev.filter((t) => t !== tag);
      })
      setExcludedTags([...excludedTags, tag])
    } else if (excludedTags.includes(tag)) {
      setExcludedTags((prev) => {
        return prev.filter((t) => t !== tag);
      })
    }
 
  };
  const getTagClass = (tag) => {
    return selectedTags.includes(tag) ? "include" : excludedTags.includes(tag) ? "exclude" : " normal";
  };
  return (
    <div className="mb-5" >
      <div className="tag-list-header text-lg gap-2 flex items-center mb-1">
        <div>
          {header}
        </div>
        <div className="grow bg-white opacity-10 h-[1px] pl-2">
        </div>
      </div>
      <div className="list-tag">
        {tags.map((tag, index) => (
          <div key={index} className={`item-tag select-none ${getTagClass(tag)}`} onClick={() => handleClick(tag)}>{tag}</div>
        ))}

      </div>

    </div>
  )
}
