import { SubMenu } from "@/shared/Interface/Interface";

export const crearSubMenu = (
    nombre: string,
    icono: string,
    ruta: string
): SubMenu => {
    return {
        nombre: nombre,
        icono: icono,
        ruta: ruta,
    };
};
