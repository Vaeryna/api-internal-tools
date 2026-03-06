// GET / api / tools
// GET / api / tools ? department = Engineering & status = active
// GET / api / tools ? min_cost = 10 & max_cost = 50 & category = Development

// GET /api/tools/:id

import {FastifyInstance} from "fastify";
import {listTools} from "../services/tool.services";

export default async function toolsRoutes(app: FastifyInstance) {
    app.get("/", async () => {
        const tools = await listTools();
        return {data: tools}
    })
}

//avec le prefix "/tools" , le "/" devient GET /tools