import NavbarProvider from "@/app/components/NavbarProvider";

export default function LayoutUpload({ children }) {
    return (
        <>
            <NavbarProvider>
                {children}
            </NavbarProvider>
        </>
    )
}