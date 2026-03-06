// GET / api / tools
// GET / api / tools ? department = Engineering & status = active
// GET / api / tools ? min_cost = 10 & max_cost = 50 & category = Development

// GET /api/tools/:id

import {FastifyInstance} from "fastify";
import {createTool, getTool, listTools, updateTool} from "../services/tool.services";
import {CreateTool, UpdateTool} from "../models/tool.models";

export default async function toolsRoutes(app: FastifyInstance) {
    app.get("/", async () => {
        const tools = await listTools();
        return {data: tools}
    })

    app.get("/:id", async (request, reply) => {
        const id = (request.params as { id: number }).id
        const tool = await getTool(id);

        if (!tool) return reply.code(404).send({message: "Tool not found"})

        return {data: tool}
    })

    app.post<{ Body: CreateTool }>("/", async (request, reply) => {

        const tool = await createTool(request.body)

        return reply.code(201).send({
            message: "Tool created",
            data: tool
        })
    })


    app.put<{ Body: UpdateTool }>("/:id", async (request, reply) => {
        const id = (request.params as { id: number }).id

        const tool = await updateTool(id, request.body)

        return reply.code(201).send({
            message: `Tool ${id} is modified`,
            data: tool
        })

    })
}


//avec le prefix "/tools" , le "/" devient GET /tools