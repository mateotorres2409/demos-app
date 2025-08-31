
docker build -t python-uuid-service app -f Dockerfile
docker run -d -p 8000:8000 --rm -e NODE_API_URL="http://127.0.0.1:3000/uuid" python-uuid-service
curl http://localhost:8000/python-uuid