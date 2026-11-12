//import json server
const  jsonServer=require('json-server')

//create server for running json file
const server=jsonServer.create()

//set up route/path for json file
const router=jsonServer.router('db.json')

//create middleware for data parsing
const middleware=jsonServer.defaults()

server.use(middleware)
server.use(router)

const PORT=3000
server.listen(PORT,()=>{
    console.log("server started");
})