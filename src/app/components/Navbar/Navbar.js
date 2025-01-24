"use client"

import { useDispatch, useSelector } from "react-redux";
import LogoAndName from "../common/LogoAndName";
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { logout } from "@/redux/user/userSlice";
import Image from "next/image";
export default function Navbar({ toggleSidebar, isSidebarOpen,isChapterPage, isOpenSidebarRight }) {

    const [isScrolled, setIsScrolled] = useState(false);
    const [opacityNav, setOpacityNav] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isOpenModalUser, setIsOpenModalUser] = useState(false);
    const [isOpacityFullModalUser, setIsOpacityFullModalUser] = useState(false);
    const [typeSearch, setTypeSearch] = useState('');
    const [clientUser, setClientUser] = useState(null);
    const dispatch = useDispatch();
    const router = useRouter();

    let reduxUser = useSelector(({ users }) => {
            return users.user
    })
    
    const handleLogout = () => {
        dispatch(logout());
        // router.push('/login'); // Chuyển hướng đến trang đăng nhập sau khi logout
    };

    const clearInput = (setInputFunc) => {
        setInputFunc(''); // Xóa giá trị
    };
    // Hàm mở modal
    const openModal = () => {
        setIsOpenModal(true);

    };

    // Hàm đóng modal
    const closeModal = () => {
        setIsOpenModal(false);
    };

    // Hàm mở modal
    const openModalUser = () => {
        setIsOpenModalUser(true);
        setTimeout(() => {
            setIsOpacityFullModalUser(true);
        }, 10);
    };

    // Hàm đóng modal
    const closeModalUser = () => {
        setIsOpenModalUser(false);
        setIsOpacityFullModalUser(false);
    };

    // Đóng modal khi nhấp bên ngoài modal
    const handleOutsideClick = (event) => {
        if (event.target.id === "myModal") {
            closeModal();
        }
    };
    const handleOutsideClickModalUser = (event) => {
        if (event.target.id === "myModalUser") {
            closeModalUser();
        }
    };
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                switch (true) {
                    case (window.scrollY > 0 && window.scrollY < 51):
                        setOpacityNav(10)
                        break;
                    case (window.scrollY > 50 && window.scrollY < 101):
                        setOpacityNav(25)
                        break;
                    case (window.scrollY > 100 && window.scrollY < 151):
                        setOpacityNav(40)
                        break;
                    case (window.scrollY > 150 && window.scrollY < 201):
                        setOpacityNav(70)
                        break;
                    case (window.scrollY > 200 && window.scrollY < 251):
                        setOpacityNav(90)
                        break;
                    case (window.scrollY > 250 && window.scrollY < 301):
                        setOpacityNav(90)
                        break;
                    default:
                        setOpacityNav(100)
                        // Thực hiện hành động khi không nằm trong các khoảng trên
                        break;
                }
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    useEffect(() => {
        if (reduxUser) {
            setClientUser(reduxUser);
        } else {
            setClientUser({
                fullname: 'Guest',
                avatarUrl: '/guest-ava.png',
                isGuest: true,
            });
        }
    }, [reduxUser]);

    if (!clientUser) {
        return null; // Render nothing until hydration is complete
    }

    return (

        <div className={`navbar-container w-full h-[56px] ${isChapterPage? 'absolute' : 'fixed'}  flex justify-center z-40 
            `}>
            <div className={`w-full h-[56px] ${isChapterPage? 'absolute' : 'fixed'}  ${isScrolled ? `bg-[--background-tag]  backdrop-blur-lg opacity-${opacityNav} border-b-[3px] border-[--color-pink-purple]`
                : 'bg-transparent'
                }`}></div>
            <div className={`navbar  ${isChapterPage? '' : 'fixed'} w-full px-6 max-w-[1440px] bg-transparent backdrop-blur-sm flex items-center justify-between right-side 
                   ${isSidebarOpen ? 'pl-[286px] largepc:pl-8' : ''}
                   `}>
                <div className={`flex items-center mr-auto ${!isSidebarOpen ? '' : 'opacity-0 pointer-events-none'}`}>
                    <div className="open-sidebar-button button-common w-10 h-10 bg-transparent flex justify-center items-center mr-2" onClick={toggleSidebar}>
                        <svg data-v-9ba4cb7e data-v-8d292eb9 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon" style={{ color: 'currentcolor' }}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h12M3 6h18M3 18h6" /></svg>

                    </div>
                    <LogoAndName />
                </div>

                <div className="navbar-right w-auto flex items-center">
                    <div id="open-search-modal" onClick={openModal} className={`search-bar-navbar bg-[--sidebar-background] ${isOpenModal ? 'w-[744px] z-50' : 'w-80'}  h-8 hidden tablet:flex justify-between items-center px-4 rounded-lg relative`} >
                        <div className="glass w-full h-8 bg-[--background-tag] px-4 rounded-lg absolute top-0 left-0 opacity-80 -z-20"></div>
                        <input className="navbar-search-input w-full h-full outline-none text-white bg-transparent" onChange={(e) => {
                            setTypeSearch(e.target.value)
                        }} value={typeSearch} id='search-navbar' placeholder="Search" aria-label="Search" />
                        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-white w-4 h-4 ${isOpenModal || typeSearch ? 'hidden' : ''}`} viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                        {typeSearch && (
                            <div onClick={() => {
                                clearInput(setTypeSearch)
                            }} className="clear-input-button absolute right-[8px] top-[4px]">
                                <svg data-v-9ba4cb7e data-v-a3d18793 xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" className="icon text-text-white"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 6 6 18M6 6l12 12" /></svg>
                            </div>)}
                        {/* Result search */}
                        <div className={`result-search ${isOpenModal ? '' : 'hidden'} absolute top-9 left-0 w-full rounded-lg p-4 bg-[--background-chapter] text-white`}>Enter a search query...</div>
                    </div>

                        {isOpenModal &&
                            <div id="myModal" className="modal" onClick={handleOutsideClick}>
                            </div>
                        }
                        <div className="relative" >
                            <div className="avatar-navbar w-10 h-10 bg-slate-500 rounded-full ml-4 overflow-hidden cursor-pointer" onClick={openModalUser}>
                                <Image className=""
                                    src={clientUser.avatarUrl}
                                    alt="Picture of the author"
                                    width={500}
                                    height={500}
                                />
                            </div>
                            <div id="modal-user" className={`modal-user  ${isOpenModalUser ? 'block text-white w-[299px] h-[753px] p-[24px] rounded bg-[--sidebar-background] absolute right-0 top-14 z-50' : 'hidden'} bg-modal-user ${isOpacityFullModalUser ? 'opacity-full' : 'opacity-10'} `}>
                                <div className="top-modal-user flex items-center flex-col gap-1">
                                    <div className="avatar-image w-[64px] h-[64px] bg-white rounded-full overflow-hidden cursor-pointer">
                                        <Image className=""
                                            src={clientUser.avatarUrl}
                                            alt="Picture of the author"
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="user-name text-lg font-bold">
                                        {clientUser.fullname}
                                    </div>
                                    <div className="role">User</div>
                                </div>
                                {clientUser.isGuest ? <>
                                    <hr className="my-3" />
                                <div className="bottom-modal-user">
                                    <div className="sign-out-div flex px-3 py-2 text-lg items-center cursor-pointer" onClick={()=>{
                                        router.push('/login');
                                    }}>
                                        <div>
                                            <svg data-v-9ba4cb7e="" data-v-5866404a="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"></path></svg>
                                        </div>
                                        <div >Log In</div>
                                    </div>
                                </div>
                                </> : <>
                                    <hr className="my-3" />
                                    <div className="list-of-me font-medium tracking-wider">
                                        <div className="item-of-me flex px-3 py-2">
                                            <div className="logo-item-of-me">
                                                <svg data-v-9ba4cb7e="" data-v-c1e70143="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8"></path></svg>
                                            </div>
                                            <div className="title-item-of-me"> My Profile</div>
                                        </div>
                                        <div className="item-of-me flex px-3 py-2">
                                            <div className="logo-item-of-me">
                                                <svg data-v-9ba4cb7e="" data-v-c1e70143="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
                                            </div>
                                            <div className="title-item-of-me"> My Follows</div>
                                        </div>
                                        <div className="item-of-me flex px-3 py-2">
                                            <div className="logo-item-of-me">
                                                <svg data-v-9ba4cb7e="" data-v-c1e70143="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path></svg>
                                            </div>
                                            <div className="title-item-of-me"> My Lists</div>
                                        </div>
                                        <div className="item-of-me flex px-3 py-2">
                                            <div className="logo-item-of-me">
                                                <svg data-v-9ba4cb7e="" data-v-c1e70143="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m14 10v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"></path></svg>
                                            </div>
                                            <div className="title-item-of-me"> My Groups</div>
                                        </div>
                                    </div>
                                    <hr className="my-3" />
                                    <div className="bottom-modal-user">
                                        <div className="sign-out-div flex px-3 py-2 text-lg items-center cursor-pointer" onClick={handleLogout}>
                                            <div>
                                                <svg data-v-9ba4cb7e="" data-v-5866404a="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" className="icon text-icon-contrast text-undefined mr-2"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4m7 14 5-5-5-5m5 5H9"></path></svg>
                                            </div>
                                            <div >Sign Out</div>
                                        </div>
                                    </div>
                                </>}
                              

                            </div>
                            {isOpenModalUser &&
                                <div id="myModalUser" className={`modal bg-modal-user ${isOpacityFullModalUser ? 'opacity-full' : 'opacity-10'} `} onClick={handleOutsideClickModalUser}>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        

    )
}
