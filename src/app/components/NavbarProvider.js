'use client'
import React from 'react';
import { useState } from 'react';
import { usePathname } from "next/navigation";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/SidebarLeft";

export default function NavbarProvider({ children }) {

  //! Sidebar right for only Chapter Page
  const [isOpenSidebarRight, setIsOpenSidebarRight] = useState(false);

  // let toggleSidebarRight = () => {
  //   setIsOpenSidebarRight(!isOpenSidebarRight);
  // };
  const pathname = usePathname();

  const showNavbar = !['/login', '/signup'].includes(pathname); // Không hiển thị Navbar trên login và signup
  const isChapterPage = pathname.startsWith('/chapter');
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
              <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen}
                isOpenSidebarRight={isOpenSidebarRight}

              />
          )}

          {/* children */}
          <div className="content-manga-page-container w-full bg-transparent flex justify-center">
            <div className={`content-manga-page w-full px-8 mt-2 max-w-[1440px] pt-[56px] right-side ${isSidebarOpen ? 'pl-[286px] largepc:pl-8' : ''}`}>
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
