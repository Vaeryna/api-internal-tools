import Fastify from "fastify"
import toolsRoutes from "./routes/tools.routes";


export function buildApp() {
    const app = Fastify({logger: true});

    // app.register(usersRoutes, {prefix: "/users"})  --> si path /users/truc/much alors appelle le fichier userRoutes

    app.register(toolsRoutes, {prefix: "/tools"})


    return app;
}