from pydantic import BaseModel, Field
from decimal import Decimal
from typing import Optional


class ProductoDTO(BaseModel):
    nombre: str = Field(..., min_length=1, max_length=100)
    descripcion: str = Field(..., min_length=1)
    precio: Decimal = Field(..., gt=0, decimal_places=2)  # Debe ser mayor a 0
    precio_de_venta: Decimal = Field(..., gt=0, decimal_places=2)  # Debe ser mayor a 0
    proveedor: str = Field(..., min_length=1)
    stock: int = Field(..., ge=0)  # Mayor o igual a 0
    categoria: Optional[str] = Field(None, max_length=50)


class ResponseProducto(BaseModel):
    id: int
    nombre: str
    descripcion: str
    precio: Decimal
    precio_de_venta: Decimal
    provedor: str
    stock: int
    categoria: Optional[str] = None

    class Config:
        from_attributes = True
