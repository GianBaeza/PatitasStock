from db.database import Base
from sqlalchemy import Column, Integer, String, Numeric


class Producto(Base):
    __tablename__ = "productos"

    id = Column(Integer, primary_key=True)
    nombre: Column[str] = Column(String, index=True, nullable=False)
    descripcion: Column[str] = Column(String, nullable=False)
    precio = Column(Numeric(precision=10, scale=2), nullable=False)
    stock = Column(Integer, nullable=False)
    categoria = Column(String, nullable=True)  # Agregado para coincidir con tu JSON
