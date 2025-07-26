import Inicio from "@/features/inicio/Inicio";
import SubMenu from "../features/inicio/components/SubMenu";
import { subMenu } from "@/features/inicio/constantes";
import Titulo from "@/shared/ui/Titulo";

export default function Home() {
    return (
        <div className="flex flex-col items-start justify-center h-full gap-4">
            <header className="w-full flex items-center p-4 bg-shadow-md h-16 bg-indigo-400">
                <SubMenu menu={subMenu} />
            </header>
            <Titulo
                titulo="Patitas Stock"
                estilos="text-xl pl-4 pt-10 bg-red-400 "
            />
            <Inicio />
        </div>
    );
}
