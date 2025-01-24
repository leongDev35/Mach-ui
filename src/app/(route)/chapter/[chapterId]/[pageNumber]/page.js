"use client"

import ChapterBody from "@/app/components/ChapterBody/ChapterBody";
import NavbarProvider from "@/app/components/NavbarProvider";
import SidebarRight from "@/app/components/Sidebar/SidebarRight";
import page from "@/app/(route)/follows/library/page";
import axios from "axios";

import { use } from "react";

export default function chapterPages({ params }) {
    const { chapterId, pageNumber } = use(params);
    return (
        <>
            <NavbarProvider>
                <ChapterBody chapterId={chapterId} pageNumber={pageNumber}>
                </ChapterBody>
            </NavbarProvider>
        </>
    );
}