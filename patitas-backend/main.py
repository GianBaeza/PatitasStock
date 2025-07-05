from fastapi import FastAPI
from routes.Inicio import router as inicio_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.include_router(inicio_router)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # o ["*"] para permitir todos
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 