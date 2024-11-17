


import NavbarProvider from "@/app/components/NavbarProvider";

export default function LayoutTitle({ children }) {
    return (
        <>
            <NavbarProvider>
                {children}
            </NavbarProvider>
        </>
    )
}
