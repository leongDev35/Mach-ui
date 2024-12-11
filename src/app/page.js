"use client" //! load function react for first time load page
import { useState } from "react";
import ContentHomePage from "./components/ContentHomePage/ContentHomePage";
import SelectGroupModal from "./components/Modal/SelectGroupModal";
import NavbarProvider from "./components/NavbarProvider";

export default function Home() {

  const [isSelectGroupModalOpen, setIsSelectGroupModalOpen] = useState(false);

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
          <ContentHomePage openModal={openModal}>
          </ContentHomePage >
        </NavbarProvider>
        <SelectGroupModal isSelectGroupModalOpen={isSelectGroupModalOpen} closeModal={closeModal} handleOutsideClick={handleOutsideClick} />
    </>

  );
}
