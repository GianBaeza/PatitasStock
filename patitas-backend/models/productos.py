from pydantic import BaseModel


class Producto(BaseModel):
    id: int
    nombre: str
    precio: float
    codigo: str | int
    stock: int
    descripcion: str
