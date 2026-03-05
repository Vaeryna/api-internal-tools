import Fastify from "fastify"


export function buildApp() {
    const app = Fastify();

    // app.register(usersRoutes, {prefix: "/users"})

    return app;
}