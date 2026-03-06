// GET / api / tools
// GET / api / tools ? department = Engineering & status = active
// GET / api / tools ? min_cost = 10 & max_cost = 50 & category = Development

// GET /api/tools/:id

import {FastifyInstance} from "fastify";
import {listTools} from "../services/tool.services";
import {createOneTool, findOneTool} from "../repositories/tools.repo";

export default async function toolsRoutes(app: FastifyInstance) {
    app.get("/", async () => {
        const tools = await listTools();
        return {data: tools}
    })

    app.get("/:id", async (request, reply) => {
        const id = (request.params as { id: number }).id
        const tool = await findOneTool(Number(id));

        if (!tool) return reply.code(404).send({message: "Tool not found"})

        return {data: tool}
    })

    app.post("/", async (request, reply) => {
        const body = (request.body)

        console.log(body, typeof body)
        const tool = await createOneTool(Object(body))

        return reply.code(201).send({
            message: "Tool created",
            data: tool
        })
    })
}

//avec le prefix "/tools" , le "/" devient GET /tools