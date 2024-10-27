"use client"

import TagList from "./TagList"

export default function FilterTags({ dropdownFilterTagsRef,turnSwitchdown, handleInputChange, inputValueSearchTags, setInputValueSearchTags, clearInput, sortBy, switchDropdownFilterTag, setSwitchDropdownFilterTag }) {

    
    return (
        <>
            <div tabindex="0" ref={dropdownFilterTagsRef} className="item-filter filter-tags-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    Filter tags
                </div>

                {/* Phải thêm tabindex để những thẻ kp input nhận được focus */}
                <div tabindex="0" className="input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
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

                    <TagList header="Format"></TagList>
                    <TagList header="Genre"></TagList>
                    <TagList header="Theme"></TagList>
                    <TagList header="Content"></TagList>

                </div>
            </div>

        </>

    )
}
