from db.database import Base, motor
from models.productos import Producto
print("🗑️ Eliminando todas las tablas...")
Base.metadata.drop_all(bind=motor)

print("✅ Creando todas las tablas...")
Base.metadata.create_all(bind=motor)

print("🎉 ¡Tablas recreadas exitosamente!")
Producto.__table__.create(motor)
