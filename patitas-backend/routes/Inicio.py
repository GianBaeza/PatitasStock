from fastapi import APIRouter
from typing import List
from models.productos import Producto
from fastapi import HTTPException, WebSocketException


Fake_db: List[Producto] = [
    Producto(
        id=1,
        nombre="Sartén Antiadherente",
        descripcion="Sartén de aluminio con recubrimiento antiadherente",
        precio=2500.0,
        stock=15,
        codigo="SARTEN-001",
    ),
    Producto(
        id=2,
        nombre="Olla de Acero Inoxidable",
        descripcion="Olla grande para sopas y guisos",
        precio=3500.0,
        stock=10,
        codigo="OLLA-002",
    ),
    Producto(
        id=3,
        nombre="Cuchillo Chef",
        descripcion="Cuchillo profesional de acero inoxidable",
        precio=1200.0,
        stock=25,
        codigo="CUCHILLO-003",
    ),
    Producto(
        id=4,
        nombre="Tabla de Picar",
        descripcion="Tabla de madera para picar alimentos",
        precio=800.0,
        stock=30,
        codigo="TABLA-004",
    ),
    Producto(
        id=5,
        nombre="Batidora Manual",
        descripcion="Batidora de mano eléctrica",
        precio=2200.0,
        stock=8,
        codigo="BATIDORA-005",
    ),
]

router = APIRouter(prefix="/productos", tags=["Inicio"])


@router.get("/all")
def getListaProductos():
    if not Fake_db:
        raise HTTPException(status_code=404, detail="No hay productos disponibles")
    return Fake_db
