"use client"

export default function SidebarRight({isOpenSidebarRight,toggleSidebarRight}) {
    
    return (
        <div className={`sidebar-right select-none fixed top-0 right-0 bg-[--background] p-[16px] w-[311px] h-full flex flex-col gap-2 ${!isOpenSidebarRight ? 'hidden' : ''}`}>
            <div className="close-button cursor-pointer hover:bg-[--background-button-right-side] transition-background duration-200 w-10 h-10 center-children rounded-full" onClick={toggleSidebarRight}>
                <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
            </div>

            <div className="detail-chapter">
                <div className="manga-name flex my-2">
                    <div>
                        <svg data-v-9ba4cb7e="" data-v-5d3b2210="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="feather feather-book-open icon text-icon-contrast text-undefined mr-4 my-auto" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                    </div>
                    <div>Hirayasumi</div>
                </div>
                <div className="chapter-name flex my-2">
                    <div>
                        <svg data-v-9ba4cb7e="" data-v-5d3b2210="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" class="icon text-icon-contrast text-undefined mr-4"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 2v7h7"></path></svg>
                    </div>
                    <div>2nd Semester</div>
                </div>
            </div>

            <div className="page-route flex gap-1 ">
                <div className="previous-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m14.25 18-6-6 6-6" /></svg>

                </div>
                <div className="dropdown-select-page bg-[--sidebar-background] grow rounded flex justify-between items-center px-4 py-2 h-[54px]">
                    <div className="page-numberssssss">
                        <div className="text-xs">Page</div>
                        <div>3</div>
                    </div>
                    <div className="dropdown-select-chap-button">
                        <svg data-v-9ba4cb7e data-v-d2fabe5b xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon text-icon-contrast text-undefined " viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>
                <div className="next-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-right icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m10 18 6-6-6-6" /></svg>

                </div>
            </div>
            <div className="chapter-route flex gap-1 ">
                <div className="previous-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-left icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m14.25 18-6-6 6-6" /></svg>

                </div>
                <div className="dropdown-select-chap bg-[--sidebar-background] grow rounded flex justify-between items-center px-4 py-2 h-[54px]">
                    <div className="chap-number">
                        <div className="text-xs">Chapter</div>
                        <div>Chapter 69</div>
                    </div>
                    <div className="dropdown-select-chap-button">
                        <svg data-v-9ba4cb7e data-v-d2fabe5b xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-down icon text-icon-contrast text-undefined " viewBox="0 0 24 24" style={{ transform: 'rotate(0deg)' }}><path d="m6 9 6 6 6-6" /></svg>
                    </div>
                </div>
                <div className="next-chap button-sidebar-right w-[32px] h-[54px] rounded center-children">
                    <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-chevron-right icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m10 18 6-6-6-6" /></svg>

                </div>
            </div>

        </div>
    )
}
