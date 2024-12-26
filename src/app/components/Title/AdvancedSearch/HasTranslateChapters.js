import React, { useState } from 'react'

export default function HasTranslateChapters({ title, placeholder, dropdownRef, turnSwitchdown, switchDropdown, setSwitchDropdown }) {
    const checkboxOption = ['Safe', 'Suggestive', 'Erotica'];
    const [checkboxSelected, setCheckboxSelected] = useState([]);
    const [tickCheckbox, setTickCheckbox] = useState(false);

    const handleSelectCheckbox = (option) => {
        if (checkboxSelected.includes(option)) {
            // Nếu option đã có trong checkboxSelected, xóa nó
            setCheckboxSelected(checkboxSelected.filter(item => item !== option));
        } else {
            // Nếu option chưa có trong checkboxSelected, thêm vào
            setCheckboxSelected([...checkboxSelected, option]);
        }
    }
    return (
        <>
            <div tabIndex="0" ref={dropdownRef} className="item-filter sort-by-filter text-sm relative">
                <div className="flex items-center gap-2 cursor-pointer select-none mb-1" onClick={()=> {
                    setTickCheckbox(!tickCheckbox)
                }}>
                    <div>

                        {tickCheckbox ?

                            <svg data-v-9ba4cb7e data-v-e5d18c36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined">
                                <path className="text-[--text-gray]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                <path className="text-[--color-pink-purple]" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 11 3 3L22 4" />

                            </svg>
                            :

                            <svg data-v-9ba4cb7e data-v-e5d18c36 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-square icon text-icon-contrast text-undefined" viewBox="0 0 24 24">
                                <rect className="text-[--text-gray]"  width={18} height={18} x={3} y={3} rx={2} ry={2} />
                            </svg>

                        }


                    </div>

                    <div className="text-[--text-gray]">
                        {title}
                    </div>
                </div>


                {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
                <div tabIndex="0" className={`input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]  ${tickCheckbox ? 'cursor-pointer' : 'pointer-events-none opacity-70 cursor-none'}`}
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
                    <ul className="">
                        {checkboxOption.map((option, index) => (
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
                        ))}
                    </ul>

                </div>
            </div>
        </>
    )
}

