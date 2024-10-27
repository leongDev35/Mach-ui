"use client"

import { useState } from "react"
import ListOption from "../../common/ListOption"
import MangaUpdateByList from "./MangaUpdateByList"
import UpdateByListChap from "./UpdateByListChap"

export default function LatestUpdate() {
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

        }

    ];
    return (
        <>
            <div className="font-bold text-[26px]">Latest Updates</div>
            <ListOption setSelectOption={setSelectOption} listItems={listItems}></ListOption>
            {selectOption === "byList" ? <UpdateByListChap></UpdateByListChap> : <MangaUpdateByList></MangaUpdateByList>}

        </>
    )

}
