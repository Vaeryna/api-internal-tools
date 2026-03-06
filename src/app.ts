import Fastify from "fastify"
import toolsRoutes from "./routes/tools.routes";
import costTrackingRoutes from "./routes/cost-tracking.routes";
import {swaggerPlugin} from "./swagger/swagger";
import {TypeBoxTypeProvider} from "@fastify/type-provider-typebox";

const app = Fastify({logger: true}).withTypeProvider<TypeBoxTypeProvider>();

export async function buildApp() {
    app.register(toolsRoutes, {prefix: "/tools"})
    app.register(costTrackingRoutes, {prefix: "/cost-tracking"})

    app.register(swaggerPlugin)

    return app;
}

