from fastapi import FastAPI
from routes.productos import router as inicio_router
from fastapi.middleware.cors import CORSMiddleware
from db.database import Base, motor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8000",
        "http://127.0.0.1:8000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(inicio_router)

# --- CREACIÓN DE TABLAS ---
Base.metadata.create_all(bind=motor)