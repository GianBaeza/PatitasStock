from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from db.database import crearSession
from schema.schema_Productos import CrearProducto
from api.api_Productos import crear_producto


router = APIRouter(prefix="/productos", tags=["Productos"])


def get_db():
    db = crearSession()
    try:
        yield db
    finally:
        db.close()


@router.post("/crear", response_model=CrearProducto, status_code=201)
def CrearNuevoProducto(producto: CrearProducto, db: Session = Depends(get_db)):
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
