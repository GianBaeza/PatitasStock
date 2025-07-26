import type { SubMenu } from "@/shared/Interface/Interface";
import Link from "next/link";
import React from "react";

interface SubMenuProps {
    menu: SubMenu[];
}
export default function SubMenu({ menu }: SubMenuProps) {
    return (
        <nav className="w-full flex items-center bg-transparent justify-center">
            <ul className="flex space-x-4 gap-2 ">
                {menu.map((item, index) => (
                    <li key={index} className="text-white hover:text-gray-200">
                        <Link href={item.ruta}>{item.nombre}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
