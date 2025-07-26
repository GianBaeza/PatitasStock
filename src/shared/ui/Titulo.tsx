import React from "react";

interface TituloProps {
    Tipo?: "h1" | "h2" | "h3";
    titulo: string;
    estilos: string;
    props?: React.HTMLAttributes<HTMLHeadingElement>;
}

export default function Titulo({
    Tipo = "h1",
    titulo,
    estilos,
    props,
}: TituloProps) {
    const Heading = Tipo;
    return (
        <Heading className={`text-black/30 font-mulish ${estilos}`} {...props}>
            {titulo}
        </Heading>
    );
}
