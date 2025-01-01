import ContentMangaPage from "@/app/components/ContentMangaPage/ContentMangaPage";
import NavbarProvider from "@/app/components/NavbarProvider";
import Head from "next/head";

export default async function TitlePage({ params }) {
  const { mangaId, mangaName } = await params;
  console.log(mangaName);

  return (
   
      <ContentMangaPage mangaId={mangaId}>
      </ContentMangaPage>

  );
}