import Fastify from "fastify"
import toolsRoutes from "./routes/tools.routes";
import costTrackingRoutes from "./routes/cost-tracking.routes";
import * as fs from "fs/promises";
import {marked} from "marked";


export function buildApp() {
    const app = Fastify({logger: true});

    app.register(toolsRoutes, {prefix: "/tools"})
    app.register(costTrackingRoutes, {prefix: "/cost-tracking"})

    app.register(async function (app) {
        app.get('/docs', async (request, reply) => {
            const md = await fs.readFile('./documentation/api.md', 'utf-8')
            const html= marked(md)

            reply.type('text/html').send(html)
        })


    })


    return app;
}