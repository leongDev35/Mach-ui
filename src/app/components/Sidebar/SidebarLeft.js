import LogoAndName from '../common/LogoAndName'

export default function Sidebar({ isSidebarOpen, toggleSidebar }) {

    return (
        <div className={`sidebar fixed w-[256px] z-50 h-screen bg-[--sidebar-background] ${isSidebarOpen ? '' : 'sidebar-hidden'}`}>
            <div className={`${isSidebarOpen ? '' : 'hidden'}`}>
                <div className={`sidebar-top flex items-center justify-between`}>
                    <LogoAndName />
                    <div className="button-close w-10 h-10 flex justify-center items-center" onClick={toggleSidebar}>
                        <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="white" viewBox="0 0 24 24" className="icon" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                    </div>
                </div>
                <div className="sidebar-body">
                    <div className="sidebar-container p-4">
                        <div className="flex sidebar-navigate">
                            <div className="mr-2">
                                <svg data-v-9ba4cb7e data-v-b36f49bc xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-home icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M9 22V12h6v10" /></svg>
                            </div>
                            <div>Home</div>

                        </div>
                        <div className="side-list-item">
                            <div className="flex sidebar-navigate">
                                <div className="mr-2">
                                    <svg data-v-9ba4cb7e data-v-8a0f6996 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></svg>

                                </div>
                                <div>
                                    <div>Follows</div>

                                </div>
                            </div>
                            <ul className="ml-4">
                                <li className="mt-1">Updates</li>
                                <li className="mt-1">Library</li>
                                <li className="mt-1">MDLists</li>
                                <li className="mt-1">My Groups</li>
                                <li className="mt-1">Reading History</li>
                            </ul>

                        </div>
                        <div className="side-list-item">
                            <div className="flex sidebar-navigate">
                                <div className="mr-2">
                                    <svg data-v-9ba4cb7e data-v-8a0f6996 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="feather feather-book-open icon" viewBox="0 0 24 24" style={{ color: 'currentcolor' }}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>


                                </div>
                                <div>
                                    <div>Titles</div>

                                </div>
                            </div>
                            <ul className="ml-4">
                                <li className="mt-1">Advanced Search</li>
                                <li className="mt-1">Recently Added</li>
                                <li className="mt-1">Latest Updates</li>
                                <li className="mt-1">Random</li>
                            </ul>

                        </div>
                    </div>


                </div>
            </div>


        </div>
    )
}
