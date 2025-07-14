from pydantic import BaseModel, Field, field_validator
from typing import Optional


class ProductoBase(BaseModel):
   
    nombre: str = Field(..., min_length=1, description="Nombre del producto")
    descripcion: str = Field(..., max_length=1000)
    precio: float = Field(
        ...,
        gt=0,
        description="Precio en USD, debe ser mayor a 0",
    )
    stock: int = Field(
        ...,
        ge=0,
        description="Cantidad en inventario, no puede ser negativo",
    )

    @field_validator("precio")
    @classmethod
    def precio_razonable(cls, valor: float) -> float:
        if valor > 999999.99:
            raise ValueError("El precio no puede exceder $999,999.99")
        if valor < 0.01:
            raise ValueError("El precio debe ser al menos $0.01")
        # Redondeamos a 2 decimales
        return round(valor, 2)

    @field_validator("stock")
    @classmethod
    def stock_positivo(cls, valor: int) -> int:
        if valor < 0:
            raise ValueError("El stock no puede ser negativo")
        if valor > 1000000:
            raise ValueError("El stock no puede exceder 1,000,000 unidades")
        return valor


class ProductoDTO(ProductoBase):
    id: Optional[int] = None  # Opcional para crear nuevos productos
    categoria: str | None


class ResponseProducto(ProductoBase):
    id: int

    class Config:
        orm_mode = True  # Permite que Pydantic use los modelos de SQLAlchemy directamente