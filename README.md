per tbere run projektin ne docker perdoren keto komanda:

docker build -t nodejs-rest-api .
docker run -p 3000:3000 nodejs-rest-api

Ne rast se do behet run pa docker duhet ekzekutuar komanda:

npm start

Testet ne postman jan kryer ne url :
http://localhost:3000/api/getNumbers

Per te bere testet unit duhet bere run:
npm test