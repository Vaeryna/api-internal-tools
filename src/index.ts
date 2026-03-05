const fastify = require('fastify')({
    logger: true
})

// Declare a route
fastify.get('/', function (request: any, reply: { send: (arg0: { hello: string }) => void }) {
    reply.send({hello: 'world'})
})

// Run the server!
fastify.listen({port: 3000}, function (err: any, address: any) {
    console.log("serveur lancé !")
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})