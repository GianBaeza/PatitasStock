"use client";

import { use } from "@/services/services";
import CardInicio from "@/shared/components/CardInicio";
import { Tabla } from "@/shared/components/Tabla";
import useFetch from "@/shared/hooks/useFetch";
import Titulo from "@/shared/ui/Titulo";
import { useCallback, useMemo, useState } from "react";
const url = "http://127.0.0.1:8000/productos/";

export default function Inicio() {
    const fetchData = useCallback(() => use.get(url), []);
    const { data, error, loading } = useFetch(fetchData);
    const [valorBuscador, setValorBuscador] = useState("");

    const propiedades = data ? Object.keys(data[0] || {}).slice(1) : []; // pasarle a la tabla las columnas

    const handleOnChangeBuscador = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        if (value.length > 1) {
            setValorBuscador(value.toLowerCase());
        }
    };

    // Filtrar la tabla según el valor del buscador
    const tablaFiltrada = useMemo(
        () =>
            data?.filter((item) =>
                Object.values(item).some(
                    (val) =>
                        val &&
                        val.toString().toLowerCase().includes(valorBuscador)
                )
            ) || data,
        [data, valorBuscador]
    );
    return (
        <main className="bg-red-100 min-h-screen w-full flex flex-col items-center justify-start">
            <article className="flex flex-col items-center h-20 w-full  justify-center">
                <Titulo
                    titulo="Bienvenidos Patitas Stock"
                    estilos="text-2xl font-bold "
                />
                <p className="">
                    Aquí encontrarás información relevante y actualizaciones.
                </p>
            </article>
            <section className="flex flex-col  justify-center items-center h-full w-full py-5">
                <span className="grid grid-cols-3 gap-4 pb-3 w-11/12 2xl:w-6/12">
                    <CardInicio />
                    <CardInicio />
                    <CardInicio />
                </span>
                <Tabla
                    head={propiedades}
                    tabla={tablaFiltrada}
                    loading={loading}
                    error={error}
                    className="w-11/12 2xl:w-6/12"
                    onChange={handleOnChangeBuscador}
                />
            </section>
        </main>
    );
}
