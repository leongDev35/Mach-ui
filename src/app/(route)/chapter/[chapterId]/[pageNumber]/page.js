import ChapterBody from "@/app/components/ChapterBody/ChapterBody";
import NavbarProvider from "@/app/components/NavbarProvider";
import SidebarRight from "@/app/components/Sidebar/SidebarRight";
import page from "@/app/(route)/follows/library/page";

//! sau này sử dụng Dynamic metadata
export const metadata = {
    title: "Chapter ",
};

export default function chapterPages({ params }) {
    const { chapterId, pageNumber } = params;
    return (

        <>
            <NavbarProvider>
                <ChapterBody chapterId={chapterId} pageNumber={pageNumber}>
                </ChapterBody>
            </NavbarProvider>
        </>
    );
}