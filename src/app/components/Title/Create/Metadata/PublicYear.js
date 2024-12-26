import React, { useRef } from 'react'

export default function PublicYear({setPublicYear, publicYear, placeholder }) {
    const inputRef = useRef(null);
    function changeYear(number) {

        if (Number(publicYear) + number < 0) {
            return;
        }
        setPublicYear(Number(publicYear) + number)
    }
    const handleDivClick = () => {
        inputRef.current.focus(); // Focus vào input khi nhấn vào div
      };
    return (
        <div className='cursor-pointer'>
            <div tabIndex="0" className="select-input-create text-sm w-full rounded px-5 py-2 bg-[--sidebar-background] flex justify-between items-center"  onClick={handleDivClick}>
                <div className='relative grow'>

                    {/* <div className={`faded-placehoder ${publicYear ? 'translate-y-[8px] text-[--text-gray]' : 'translate-y-0 '}`}>{placeholder}</div> */}

                    <input ref={inputRef} className="input-puclic-year font-normal text-sm w-full bg-[--background-grey]"
                        value={publicYear}
                        onChange={(e) => {
                            const value = e.target.value;
                            if ((/^\d+$/.test(value) && Number(value) > -1 && Number(value) < 2050) || value === '') {
                                // Nếu giá trị >= 0 hoặc input trống thì cập nhật giá trị
                                setPublicYear(value);
                            }
                            // handleInputChange(e, setInputValueSearchTags)
                        }}
                        placeholder={placeholder}
                        />

                    <div className={`bar-change-year absolute right-[9px] top-[3px] flex ${publicYear != '' ? 'block' : 'hidden'}`}>
                        <div onClick={() => {
                            changeYear(-1)
                        }} className="change-year ">
                            <svg data-v-9ba4cb7e data-v-de36b068 xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-minus icon small text-icon-contrast text-undefined hover:text-primary cursor-pointer" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>

                        </div>
                        <div onClick={() => {
                            changeYear(1)
                        }} className="change-year ">
                            <svg data-v-9ba4cb7e data-v-de36b068 xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-plus icon small text-icon-contrast text-undefined hover:text-primary cursor-pointer" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14" /></svg>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
