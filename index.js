// import json-server
const jsonServer = require()

//create an server application using jsonServer
const restServer = jsonServer.create()

// setup path for db.json
const router = jsonServer.router('db.json')

// return a middleware used by json server 
const middleware = jsonServer.defaults()

// stup port
const port = 3001

// use in server
restServer.use(middleware)
restServer.use(router)

// to run a port
restServer.listen(port,()=>{
    console.log('Rest server listining on port' +port);
})