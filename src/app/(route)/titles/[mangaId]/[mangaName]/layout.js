import axios from "axios";


export async function generateMetadata({ params }) {
   const {mangaId, mangaName } = await params;

    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE}/api/v1/manga/name/${mangaId}`);
        const data = response.data;
        
        return {
            title: data.name || "Default Manga Title",
            description: `Read ${data.name} online now!`
        };
    } catch (error) {
        console.error("Error fetching manga metadata:", error);
        return {
            title: "Error Loading Title",
            description: "An error occurred while loading the manga title.",
        };
    }
}

export default function LayoutMangaPage({ children }) {
    return (
        <>
            {children}
        </>
    )
}