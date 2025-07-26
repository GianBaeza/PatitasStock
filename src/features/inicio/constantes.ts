import { crearSubMenu } from "@/shared/utils/createSubMenu";

export const subMenu = [
    crearSubMenu('Inicio', 'home', '/inicio'),
    crearSubMenu('Productos', 'store', '/productos'),
    crearSubMenu('Rendimientos', 'rendimientos', '/rendimientos'),
]