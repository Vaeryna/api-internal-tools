import {FastifyInstance} from "fastify";
import {createTool, getTool, listTools, updateTool} from "../services/tool.services";
import {CreateTool, UpdateTool} from "../models/tool.models";

export default async function toolsRoutes(app: FastifyInstance) {

    // Récupérer tous les outils avec filtres facultatifs
    app.get("/", async (request, reply) => {
        const filters = (request.query as {
            status?: string
            category?: string
            limit?: number
            min_cost?: number
            max_cost?: number
            sort?: string;
        })
        const tools = await listTools({
            status: filters.status,
            category: filters.category,
            limit: filters.limit,
            min_cost: filters.min_cost,
            max_cost: filters.max_cost,
            sort: filters.sort,
        });
        return reply.send({data: tools})
    })

    // Récupérer l'outil via son ID
    app.get("/:id", async (request, reply) => {
        const id = (request.params as { id: number }).id
        const tool = await getTool(id);

        if (!tool) return reply.code(404).send({message: "Tool not found"})

        return {data: tool}
    })

    // Créer un outil
    app.post<{ Body: CreateTool }>("/", async (request, reply) => {

        const tool = await createTool(request.body)

        return reply.code(201).send({
            message: "Tool created",
            data: tool
        })
    })

    // Mettre à jour l'attribut d'un outil via son ID
    app.put<{ Body: UpdateTool }>("/:id", async (request, reply) => {
        const id = (request.params as { id: number }).id

        const tool = await updateTool(id, request.body)

        return reply.code(201).send({
            message: `Tool ${id} is modified`,
            data: tool
        })

    })
}


