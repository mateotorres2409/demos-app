from fastapi import FastAPI
import requests
import os
from dotenv import load_dotenv

# Cargar variables desde .env
load_dotenv()

app = FastAPI()

# Leer variable de entorno
NODE_API_URL = os.getenv("NODE_API_URL", "http://localhost:3001/uuid")

@app.get("/python-uuid")
def get_uuid_from_node():
    try:
        response = requests.get(NODE_API_URL)
        response.raise_for_status()
        data = response.json()
        return {
            "message": "Hello World",
            "uuid": data["uuid"]
        }
    except requests.exceptions.RequestException as e:
        return {
            "error": f"No se pudo obtener el UUID del servicio Node.js: {str(e)}"
        }