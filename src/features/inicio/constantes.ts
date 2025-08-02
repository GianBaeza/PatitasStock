import { crearSubMenu } from "@/lib/utils/createSubMenu";

export const subMenu = [
    crearSubMenu("Inicio", "home", "/"),
    crearSubMenu("Productos", "store", "/productos"),
    crearSubMenu("Rendimientos", "rendimientos", "/rendimientos"),
];
