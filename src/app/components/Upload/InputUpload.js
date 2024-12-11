import React from 'react'

export default function InputUpload({ title, placeholder, chapterName, setChapterName }) {
    const handleInputChange = (e, setInputFunc) => {
        setInputFunc(e.target.value);
    };

    const clearInput = (setInputFunc) => {
        setInputFunc(''); // Xóa giá trị
      };

    return (
        <>
            <div tabIndex="0" className="item-filter sort-by-filter text-sm cursor-pointer relative">
                <div className="mb-1 text-[--text-gray]">
                    {title}
                </div>

                {/* Phải thêm tabIndex để những thẻ kp input nhận được focus */}
                <div tabIndex="0" className="relative input-selected-option flex justify-between items-center rounded px-2 py-1 bg-[--sidebar-background]"
                >

                    <input type="text" className="input-search-tags text-sm w-full bg-[--sidebar-background] "
                        value={chapterName}
                        onChange={(e) => {
                            handleInputChange(e, setChapterName)
                        }} placeholder={placeholder} />

                    {chapterName && (
                        <div onClick={() => {
                            clearInput(setChapterName)
                        }} className="clear-input-button absolute right-[8px] top-[5px]">
                            <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                        </div>)}
                </div>

            </div>
        </>
    )
}
