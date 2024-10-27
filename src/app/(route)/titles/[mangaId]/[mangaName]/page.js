import ContentMangaPage from "@/app/components/ContentMangaPage/ContentMangaPage";
import NavbarProvider from "@/app/components/NavbarProvider";

export default function TitlePage({ params }) {
  const { mangaId, mangaName } = params;

  return (
    <NavbarProvider>
      <ContentMangaPage>
      </ContentMangaPage>
    </NavbarProvider>
  );
}