import type { Metadata } from "next";
import SubMenu from "../features/inicio/components/SubMenu";
import { subMenu } from "@/features/inicio/constantes";
import { Mulish } from "next/font/google";
import "./globals.css";

const mulish = Mulish({
    subsets: ["latin"],
    variable: "--geist-sans",
    display: "swap",
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    style: ["normal", "italic"],
});

export const metadata: Metadata = {
    title: "Patitas Stock",
    description: "Control de stock para Patitas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${mulish.variable}  antialiased`}>
                <header className="w-full flex items-center p-4 bg-shadow-md h-16 bg-indigo-400">
                    <SubMenu menu={subMenu} />
                </header>
                {children}
            </body>
        </html>
    );
}
