# Patitas Backend 🐾

API REST para el sistema de control de stock de Patitas.

## 🛠️ Instalación

### 1. Clonar el repositorio
```bash
git clone <tu-repositorio>
cd patitas-backend
```

### 2. Instalar dependencias
```bash
pip install -r requirements.txt
```

### 3. Configurar variables de entorno
```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita .env con tus credenciales reales
# DATABASE_URL=postgresql://postgres:tu_contraseña@localhost:5432/postgres
```

### 4. Ejecutar la aplicación
```bash
uvicorn main:app --reload
```

## 📊 API Endpoints

- **POST** `/productos/crear` - Crear nuevo producto
- **GET** `/docs` - Documentación interactiva

## 🗄️ Base de Datos

Utiliza PostgreSQL. Asegúrate de tener PostgreSQL corriendo y configura la URL en el archivo `.env`.

## 🔒 Seguridad

- ⚠️ **NUNCA** subas el archivo `.env` a Git
- Las credenciales están en `.env` (ignorado por Git)
- Usa `.env.example` como referencia
