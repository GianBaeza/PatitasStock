import type { Metadata } from "next";
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
                {children}
            </body>
        </html>
    );
}
