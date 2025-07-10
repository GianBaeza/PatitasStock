from sqlalchemy.orm import Session
from schema.schema_Productos import CrearProducto
from models.productos import Producto


def crear_producto(db: Session, producto: CrearProducto):
    nuevo_producto = Producto(**producto.model_dump())
    db.add(nuevo_producto)
    db.commit()
    db.refresh(nuevo_producto)
    return nuevo_producto  #esta fn se llama cuando ya paso todas las validaciones y se ha creado el producto correctamente
