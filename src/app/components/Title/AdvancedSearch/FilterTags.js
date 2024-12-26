"use client"

import TagList from "./TagList"

export default function FilterTags({ dropdownFilterTagsRef,turnSwitchdown, handleInputChange, inputValueSearchTags, setInputValueSearchTags, clearInput, sortBy, switchDropdownFilterTag, setSwitchDropdownFilterTag }) {
    const contentWarning = ["Gore" , "Sexual Violence"]
    const format = [
        "4-Koma",
        "Adaptation",
        "Anthology",
        "Award Winning",
        "Doujinshi",
        "Fan Colored",
        "Full Color",
        "Long Strip",
        "Official Colored",
        "Oneshot",
        "Self-Published",
        "Web Comic",
    ];

    const genres = [
        "Action",
        "Adventure",
        "Boys' Love",
        "Comedy",
        "Crime",
        "Drama",
        "Fantasy",
        "Girls' Love",
        "Historical",
        "Horror",
        "Isekai",
        "Magical Girls",
        "Mecha",
        "Medical",
        "Mystery",
        "Philosophical",
        "Psychological",
        "Romance",
        "Sci-Fi",
        "Slice of Life",
        "Sports",
        "Superhero",
        "Thriller",
        "Tragedy",
        "Wuxia",
    ];

    const themes = [
        "Aliens",
        "Animals",
        "Cooking",
        "Crossdressing",
        "Delinquents",
        "Demons",
        "Genderswap",
        "Ghosts",
        "Gyaru",
        "Harem",
        "Incest",
        "Loli",
        "Mafia",
        "Magic",
        "Martial Arts",
        "Military",
        "Monster Girls",
        "Monsters",
        "Music",
        "Ninja",
        "Office Workers",
        "Police",
        "Post-Apocalyptic",
        "Reincarnation",
        "Reverse Harem",
        "Samurai",
        "School Life",
        "Shota",
        "Supernatural",
        "Survival",
        "Time Travel",
        "Traditional Games",
        "Vampires",
        "Video Games",
        "Villainess",
        "Virtual Reality",
        "Zombies",
    ];
    
    return (
        <>
            <div tabIndex="0" ref={dropdownFilterTagsRef} className="item-filter filter-tags-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    Filter tags
                </div>

                {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
                <div tabIndex="0" className="input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
                 onClick={()=>{
                    turnSwitchdown(setSwitchDropdownFilterTag,switchDropdownFilterTag)
                }}
                >
                    <div className="text-base font-bold">
                        {sortBy}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} classname="w-5 h-5 my-auto text-midTone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="m8 9l4-4l4 4m0 6l-4 4l-4-4" /></svg>
                    </div>
                </div>
                {/* dropdown */}
                <div className={`dropdown-filter-option-list rounded w-[670px] laptop:h-[448px] h-[246px] bg-[--background-chapter] absolute z-10 mt-1 px-3 py-2 ${!switchDropdownFilterTag ? 'hidden' : 'block'}
          `}
                >
                    <div className="top-search-tags flex gap-2 text-white mb-6">
                        <div className="container-search-tags py-1.5 pl-8 pr-12 text-sm flex grow bg-[--background-grey] relative rounded-lg">
                            <div className='absolute left-[11px] top-[10px]'>
                                <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
                            </div>
                            <input type="text" className="input-search-tags text-sm w-full bg-[--background-grey]" value={inputValueSearchTags}
                                onChange={(e) => {
                                    handleInputChange(e, setInputValueSearchTags)
                                }} placeholder='Search tags' />
                            {inputValueSearchTags && (
                                <div onClick={() => {
                                    clearInput(setInputValueSearchTags)
                                }} className="clear-input-button absolute right-[11px] top-[7px]">
                                    <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                                </div>)}
                        </div>
                        <div className="w-[96px] flex items-center justify-center bg-[--color-pink-purple-danger] text-red-700 rounded-lg ">
                            <div>
                                Reset

                            </div>
                        </div>
                    </div>

                    <TagList header="Format" tags={format}></TagList>
                    <TagList header="Genre" tags={genres}></TagList>
                    <TagList header="Theme" tags={themes}></TagList>
                    <TagList header="Content" tags={contentWarning}></TagList>

                </div>
            </div>

        </>

    )
}
