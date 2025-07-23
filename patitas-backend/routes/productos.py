from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import crearSession
from schema.schema_Productos import ProductoDTO, ResponseProducto
from api.api_Productos import (
    crear_producto,
    obtener_listaProductos,
    actualizar_producto,
)


router = APIRouter(prefix="/productos", tags=["Productos"])


def get_db():
    db = crearSession()
    try:
        yield db
    finally:
        db.close()


@router.get("/", response_model=list[ResponseProducto])
def ObtenerProductos(
    baseDeDatos: Session = Depends(get_db),
):  # inyecta la sesión de BD para que traiga los productos
    try:
        listaDeProductos = obtener_listaProductos(baseDeDatos)
        return listaDeProductos
    except Exception as e:
        # Log del error para debugging
        print(f"❌ Error al obtener productos: {str(e)}")
        raise HTTPException(
            status_code=500, detail=f"Error interno del servidor: {str(e)}"
        )


@router.post("/crear", response_model=ProductoDTO, status_code=201)
def CrearNuevoProducto(producto: ProductoDTO, db: Session = Depends(get_db)):
    print("🚀 Creando nuevo producto:", producto)
    try:
        # Validaciones básicas
        if not producto.nombre or producto.nombre.strip() == "":
            raise HTTPException(status_code=400, detail="El nombre es obligatorio")

        # Crear el producto (SÍNCRONO)
        nuevo_producto = crear_producto(db=db, producto=producto)
        return nuevo_producto

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        # Log del error para debugging
        print(f"❌ Error interno: {str(e)}")
        raise HTTPException(
            status_code=500, detail=f"Error interno del servidor: {str(e)}"
        )


@router.put("/{producto_id}")
def ActualizarProducto(
    producto_id: int, producto: ProductoDTO, db: Session = Depends(get_db)
) -> dict[str, str]:
    try:

        if not producto.nombre or producto.nombre.strip() == "":
            raise HTTPException(status_code=400, detail="El nombre es obligatorio")

        actualizar_producto(db=db, producto_id=producto_id, producto=producto)

        return {"message": "Producto actualizado correctamente"}

    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        # Log del error para debugging
        print(f"❌ Error interno: {str(e)}")
        raise HTTPException(
            status_code=500, detail=f"Error interno del servidor: {str(e)}"
        )
