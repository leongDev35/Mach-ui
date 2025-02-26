"use client"

import { useState } from "react";
import ContentHomePage from "./components/ContentHomePage/ContentHomePage";
import SelectGroupModal from "./components/Modal/SelectGroupModal";
import NavbarProvider from "./components/NavbarProvider";
import TestComponent from "./TestComponent";

export default function Home() {

  const [isSelectGroupModalOpen, setIsSelectGroupModalOpen] = useState(false);
  const [firstChapterList, setFirstChapterList] = useState([]);
  console.log(firstChapterList);
  
  // Hàm mở modal 
  const openModal = () => {
    setIsSelectGroupModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsSelectGroupModalOpen(false);

  };
  // Đóng modal khi nhấp bên ngoài modal
  const handleOutsideClick = (event) => {
    if (event.target.id === "select-group-modal") {
      closeModal();
    }
  };

  return (
    < >
      <NavbarProvider>
        <ContentHomePage openModal={openModal} setFirstChapterList={setFirstChapterList}>
        </ContentHomePage >
      </NavbarProvider>
      <SelectGroupModal isSelectGroupModalOpen={isSelectGroupModalOpen} closeModal={closeModal} handleOutsideClick={handleOutsideClick} firstChapterList={firstChapterList}/>
    </>

  );
}
