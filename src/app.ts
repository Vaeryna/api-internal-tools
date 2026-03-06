import Fastify from "fastify"
import toolsRoutes from "./routes/tools.routes";
import costTrackingRoutes from "./routes/cost-tracking.routes";


export function buildApp() {
    const app = Fastify({logger: true});

    app.register(toolsRoutes, {prefix: "/tools"})
    app.register(costTrackingRoutes, {prefix: "/cost-tracking"})


    return app;
}