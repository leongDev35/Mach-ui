import React from 'react'

export default function CreaterFilter({ title, placeholder, dropdownRef, turnSwitchdown, switchDropdown, setSwitchDropdown }) {
    return (
        <>
            <div tabindex="0" ref={dropdownRef} className="item-filter sort-by-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    {title}
                </div>

                {/* Phải thêm tabindex để những thẻ kp input nhận được focus */}
                <div tabindex="0" className="input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
                    onClick={() => {
                        turnSwitchdown(setSwitchDropdown, switchDropdown)
                    }}
                >
                    <div className="text-base font-bold select-none">
                        {placeholder}
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} classname="w-5 h-5 my-auto text-midTone" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokelinecap="round" strokelinejoin="round" strokewidth="{2}" d="m8 9l4-4l4 4m0 6l-4 4l-4-4" /></svg>
                    </div>
                </div>
                {/* dropdown */}
                <div id='1' className={`dropdown-filter-option-list rounded text-base w-full laptop:h-[448px] h-[246px] bg-[--background-chapter] absolute z-10 mt-1 ${!switchDropdown ? 'hidden' : 'block'}`}
                >
                    <div className="container-search-tags py-1.5 pl-8 text-sm flex grow bg-[--background-grey] relative rounded-lg">
                            <div className='absolute left-[11px] top-[10px]'>
                                <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16m10 2-4.35-4.35" /></svg>
                            </div>
                            <input type="text" className="input-search-tags text-sm w-full bg-[--background-grey]" 
                            // value={inputValueSearchTags}
                                onChange={(e) => {
                                    // handleInputChange(e, setInputValueSearchTags)
                                }} placeholder='Search' />
                            {/* {inputValueSearchTags && (
                                <div onClick={() => {
                                    // clearInput(setInputValueSearchTags)
                                }} className="clear-input-button absolute right-[11px] top-[7px]">
                                    <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                                </div>)} */}
                        </div>
                    <ul className="">
                        {/* {checkboxOption.map((option, index) => (
                            <li
                                key={index}
                                className={`dropdown-checkbox-option-item rounded flex items-center select-none gap-2 ${checkboxSelected.includes(option) ? 'selected-checkbox' : ''} `}
                                onClick={() => {
                                    handleSelectCheckbox(option);
                                    // turnoffSwitchdown(setSwitchDropdown);
                                }}
                            >
                                <div className="checkbox-box w-3 h-3 rounded-full border-[--text-gray] border-[1px]"></div>
                                <span>
                                    {option}
                                </span>
                            </li>
                        ))} */}
                    </ul>

                </div>
            </div>
        </>
    )
}
