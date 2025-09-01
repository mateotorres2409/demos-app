# Imagen base ligera de Python
FROM python:3.13.7-slim

# Establecer directorio de trabajo
WORKDIR /app

# Copiar requirements primero (para aprovechar cache en builds)
COPY ./app/requirements.txt .

# Instalar dependencias
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el código del proyecto
COPY ./app/main.py .

# Exponer puerto de FastAPI
EXPOSE 8000

# Comando para correr FastAPI con Uvicorn
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
