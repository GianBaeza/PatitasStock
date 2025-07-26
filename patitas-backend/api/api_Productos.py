from sqlalchemy.orm import Session
from typing import Any, Dict
from schema.schema_Productos import ProductoDTO, ResponseProducto
from models.productos import Producto


def to_dict(obj: Producto) -> Dict[str, Any]:
    return {
        c.name: getattr(obj, c.name) for c in obj.__table__.columns
    }  # convierte las respuestas en diccionarios


def obtener_listaProductos(db: Session):
    return db.query(Producto).all()


def crear_producto(
    db: Session, producto: ProductoDTO
) -> (
    ResponseProducto
):  # implementar que si el producto ya existe actualice la cantidad en vez de crear uno nuevo
    nuevo_producto = Producto(**producto.model_dump())
    db.add(nuevo_producto)
    db.commit()
    db.refresh(nuevo_producto)
    return ResponseProducto(**to_dict(nuevo_producto))


def actualizar_producto(
    db: Session, producto_id: int, producto: ProductoDTO
) -> ResponseProducto:
    db_producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not db_producto:
        raise ValueError("Producto no encontrado")

    for key, value in producto.model_dump().items():
        setattr(db_producto, key, value)

    db.commit()
    db.refresh(db_producto)
    return ResponseProducto(**to_dict(db_producto))


def eliminar_producto(db: Session, producto_id: int) -> None:
    db_producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not db_producto:
        raise ValueError("Producto no encontrado")

    db.delete(db_producto)
    db.commit()
