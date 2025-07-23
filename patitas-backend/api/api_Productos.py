from sqlalchemy.orm import Session
from schema.schema_Productos import ProductoDTO,ResponseProducto
from models.productos import Producto


def obtener_listaProductos(db: Session):
    return db.query(Producto).all()


def crear_producto(db: Session, producto: ProductoDTO) -> ResponseProducto:
    nuevo_producto = Producto(**producto.model_dump())
    db.add(nuevo_producto)
    db.commit()
    db.refresh(nuevo_producto)
    return ResponseProducto(**nuevo_producto.model_dump())


def actualizar_producto(db: Session, producto_id: int, producto: ProductoDTO) -> ResponseProducto:
    db_producto = db.query(Producto).filter(Producto.id == producto_id).first()
    if not db_producto:
        raise ValueError("Producto no encontrado")

    for key, value in producto.model_dump().items():
        setattr(db_producto, key, value)

    db.commit()
    db.refresh(db_producto)
    return ResponseProducto(**db_producto.model_dump())
