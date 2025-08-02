import {
    Table,
    TableBody,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    TableCell,
    TableCaption,
} from "../ui/components/table";
import Input from "../ui/Input";

interface TablaProps {
    head?: string[];
    tabla?: any[];
    loading?: boolean;
    error?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Tabla({
    head,
    tabla,
    loading,
    error,
    className = "w-full",
    onChange,
}: TablaProps) {
    if (error) return <p>Error: {error}</p>;

    return (
        <div
            className={`h-6/12 bg-white rounded-lg shadow-sm border border-gray-200 p-2 ${className}`}
        >
            <Table className="w-full border-separate border-spacing-0 text-sm font-sans flex flex-col justify-between">
                <TableCaption>
                    <Input props={{ onChange }} />
                </TableCaption>

                <TableHeader>
                    <TableRow className="border-b border-gray-200">
                        {head?.map((column, i) => (
                            <TableHead
                                key={i}
                                className="text-left px-3 py-2 font-semibold text-gray-700 bg-gray-50 border-b border-gray-200 whitespace-nowrap w-[120px] max-w-[120px]"
                                style={{ minWidth: 120, maxWidth: 120 }}
                            >
                                {column}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody className="h-[250px] ">
                    {tabla?.length === 0 ? (
                        <TableRow>
                            <TableCell
                                colSpan={head?.length || 1}
                                className="px-3 py-2 text-gray-600 text-center"
                            >
                                No hay datos para mostrar.
                            </TableCell>
                        </TableRow>
                    ) : (
                        tabla?.map(
                            ({
                                id,
                                nombre,
                                descripcion,
                                precio,
                                precio_de_venta,
                                proveedor,
                                stock,
                                categoria,
                            }) => (
                                <TableRow
                                    key={id}
                                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                >
                                    <TableCell
                                        className="font-medium px-3 py-2 text-gray-800 whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {nombre}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {descripcion}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {precio}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 text-right whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {precio_de_venta}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 text-right whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {proveedor}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 text-right whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {stock}
                                    </TableCell>
                                    <TableCell
                                        className="px-3 py-2 text-gray-700 text-right whitespace-nowrap w-[120px] max-w-[120px]"
                                        style={{ minWidth: 120, maxWidth: 120 }}
                                    >
                                        {categoria}
                                    </TableCell>
                                </TableRow>
                            )
                        )
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow className="border-t border-gray-200 bg-gray-50">
                        <TableCell
                            colSpan={6}
                            className="px-3 py-2 text-gray-600 font-semibold"
                        >
                            Total
                        </TableCell>
                        <TableCell className="px-3 py-2 text-right text-gray-800 font-semibold">
                            $2,500.00
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    );
}
