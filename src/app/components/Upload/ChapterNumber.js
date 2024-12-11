import React from 'react'

export default function ChapterNumber({ title, placeholder, setChapterNumber, chapterNumber }) {

    function changeNumber(number) {

        if (Number(chapterNumber) + number < 0) {
            return;
        }
        setChapterNumber(Number(chapterNumber) + number)
    }

    return (
        <>
            <div tabIndex="0" className="item-filter sort-by-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    {title}
                </div>

                {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
                <div tabIndex="0" className="relative input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"

                >
                    <input className="input-search-tags text-sm w-full bg-[--sidebar-background]"
                        value={chapterNumber}
                        onChange={(e) => {
                            const value = e.target.value;
                            if ((/^\d+$/.test(value) && Number(value) > -1 && Number(value) < 2050) || value === '') {
                                // Nếu giá trị >= 0 hoặc input trống thì cập nhật giá trị
                                setChapterNumber(value);
                            }
                            // handleInputChange(e, setInputValueSearchTags)
                        }} placeholder={placeholder} />

                    <div className={`bar-change-year absolute right-[9px] top-[6px] flex ${chapterNumber != '' ? 'block': 'hidden'}`}>
                        <div onClick={() => {
                            changeNumber(-1)
                        }} className="change-year ">
                            <svg data-v-9ba4cb7e data-v-de36b068 xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-minus icon small text-icon-contrast text-undefined hover:text-primary cursor-pointer" viewBox="0 0 24 24"><path d="M5 12h14" /></svg>

                        </div>
                        <div onClick={() => {
                            changeNumber(1)
                        }} className="change-year ">
                            <svg data-v-9ba4cb7e data-v-de36b068 xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-plus icon small text-icon-contrast text-undefined hover:text-primary cursor-pointer" viewBox="0 0 24 24"><path d="M12 5v14m-7-7h14" /></svg>

                        </div>
                    </div>




                </div>

            </div>
        </>
    )
}
