import { Server } from 'node:http'
import fs from 'node:fs/promises'

const port = 3000
const server = new Server()
server.listen(port)

server.on('request', async (request, response) => {
  if (request.url === '/') {
    const fileHandle = await fs.open('views/main.html')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    fileHandle.createReadStream().pipe(response)
  } else if (request.url === '/css/main.css') {
    const fileHandle = await fs.open('public/css/main.css')
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css')
    fileHandle.createReadStream().pipe(response)
  } else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain')
    response.end('Error 404: Page Not Found')
  }
})

server.on('listening', () => {
  console.log(`server: start listen on port ${ port }`)
})
