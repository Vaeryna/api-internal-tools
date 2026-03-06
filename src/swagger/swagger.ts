import swaggerUI from "@fastify/swagger-ui";
import swagger from "@fastify/swagger";
import Fastify from "fastify";

const app = Fastify({logger: true});

export async function swaggerPlugin() {
    await app.register(swagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "API internals Tool",
                description: "Documentation de l'API de gestion des outils et du traquage des couts",
                version: "1.0.0",
            },
            servers: [
                {
                    url: "http://127.0.0.1:3000",
                    description: "Développement local"
                }
            ],
            tags: [
                {name: "tools", description: "Gestion des outils"},
                {name: "cost-tracking", description: "Suivi des couts"}
            ]
        }
    })

    await app.register(swaggerUI, {
        routePrefix: "/docs"
    })

    app.get("/api/docs/json", async () => {
        return app.swagger
    })
}
