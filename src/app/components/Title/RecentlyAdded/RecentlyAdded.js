"use client"

import { useState } from "react";
import ListOption from "@/app/components/common/ListOption";
import UpdateByList from "./UpdateByList";
import UpdateByListChap from "./UpdateByListChap";
import UpdateByListCover from "./UpdateByListCover";



export default function RecentlyAdded() {
    const [selectOption, setSelectOption] = useState("byList");
    const listItems = [
        {
            d: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
            option: "byList"
        }

        ,
        {
            d: "M21 3H3v7h18zm0 11H3v7h18z",
            option: "byListChap"

        },
        {
            d: "M10 3H3v7h7zm11 0h-7v7h7zm0 11h-7v7h7zm-11 0H3v7h7z",
            option: "byListCoverManga"

        }

    ];
    return (
        <>
            <div className="font-bold text-[26px]">Recently Added</div>
            <ListOption setSelectOption={setSelectOption} listItems={listItems}></ListOption>
            {selectOption === 'byList' ? <UpdateByList></UpdateByList>
                : selectOption === 'byListChap' ? <UpdateByListChap></UpdateByListChap> :
                    <UpdateByListCover></UpdateByListCover>

            }




        </>
    )
}
