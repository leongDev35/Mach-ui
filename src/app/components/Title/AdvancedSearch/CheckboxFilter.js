import React, { useState } from 'react'

export default function CheckboxFilter({title,placeholder,  dropdownRef, turnSwitchdown, switchDropdown, setSwitchDropdown }) {
    const checkboxOption = ['Safe', 'Suggestive', 'Erotica'];
    const [checkboxSelected, setCheckboxSelected] = useState([]);


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
                    <ul className="">
                        {checkboxOption.map((option, index) => (
                            <li
                                key={index}
                                className={`dropdown-checkbox-option-item rounded flex items-center select-none gap-2 ${checkboxSelected.includes(option)? 'selected-checkbox' : ''} `}
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
