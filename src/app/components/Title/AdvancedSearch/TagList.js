"use client"
import React, { useState } from "react";

export default function TagList({header}) {
    const [tagState, setTagState] = useState("normal");

    const handleClick = () => {
        if (tagState === "normal") {
          setTagState("include");
        } else if (tagState === "include") {
          setTagState("exclude");
        } else {
          setTagState("normal");
        }
      };
      const getTagClass = () => {
        if (tagState === "include") {
          return "item-tag include";
        } else if (tagState === "exclude") {
          return "item-tag exclude";
        } else {
          return "item-tag normal";
        }
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
                <div className={`item-tag select-none ${getTagClass()}`} onClick={handleClick}>Long Strip</div>
               
            </div>
           
        </div>
    )
}
