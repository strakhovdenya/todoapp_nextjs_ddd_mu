
start from docker (checked on windows10 and docker desktop):

docker build -t client .

docker build -t client . && docker run --name CLIENT_CONTAINER -p 0.0.0.0:3000:3000 client
###########################################################################################################
start local: 
npm install
npm run dev

###########################################################################################################
LINK: http://localhost:3000
