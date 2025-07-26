from schema.schema_Productos import ProductoDTO
from fastapi import HTTPException


def ValidarDatosProductos(producto: ProductoDTO):
    if producto.nombre.strip() == "":
        raise HTTPException(
            status_code=400,
            detail={
                "error": "El nombre del producto es obligatorio",
                "campo": "nombre",
            },
        )
    if producto.precio < 0 or producto.stock < 0:
        raise HTTPException(
            status_code=400,
            detail={"error": "El precio y el stock deben ser mayores o iguales a cero"},
        )
    return True
