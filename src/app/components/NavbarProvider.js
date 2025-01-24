'use client'
import React, { useEffect } from 'react';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/SidebarLeft";

export default function NavbarProvider({ children }) {

  //! Sidebar right for only Chapter Page
  const [isOpenSidebarRight, setIsOpenSidebarRight] = useState(false);
  const [isChapterPage, setIsChapterPage] = useState(false);

  const pathname = usePathname();

  const showNavbar = !['/login', '/signup'].includes(pathname); // Không hiển thị Navbar trên login và signup

  useEffect(() => {
    setIsChapterPage(pathname.startsWith('/chapter'));
  }, [pathname]);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    < >
      <div className="flex">
        {/* {isSidebarOpen && (
        <> */}
        <Sidebar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        {/* </>
      )} */}
        <div className="main flex-1">


          {showNavbar && (
            !isChapterPage ?
              <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
              :
              <Navbar toggleSidebar={toggleSidebar}  isChapterPage={isChapterPage} isSidebarOpen={isSidebarOpen}
                isOpenSidebarRight={isOpenSidebarRight}

              />
          )}

          {/* children */}
          <div className="content-manga-page-container w-full bg-transparent flex justify-center">
            <div className={`content-manga-page ${isChapterPage? 'w-full px-8' : 'w-full max-w-[1440px] px-8'} mt-2 pt-[56px] right-side ${isSidebarOpen ? 'pl-[286px] largepc:pl-8' : ''}`}>
              {React.Children.map(children, (child) => {
                const additionalProps = isChapterPage ? { isOpenSidebarRight, setIsOpenSidebarRight } : {};
                return React.cloneElement(child, { isSidebarOpen, toggleSidebar, ...additionalProps });
              }
              )}
            </div>
          </div>

          {/* <ContentMangaPage toggleSidebar={toggleSidebar} isSidebarOpen ={isSidebarOpen}/> */}
        </div>
      </div>
    </>
  )
}
