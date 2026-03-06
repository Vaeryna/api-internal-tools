import {FastifyInstance} from "fastify";
import {listTools} from "../services/tool.services";
import {listCostTracking} from "../services/cost-tracking.services";

export default async function costTrackingRoutes(app: FastifyInstance) {

// Récupérer tous les outils avec filtres facultatifs
    app.get("/", async (request, reply) => {
        const filters = (request.query as {
            tool_id?: number,
            month_year?: number,
            total_monthly_cost?: number,
            active_users_count?: number,
            sort?: string;
        })
        const costTracking = await listCostTracking({
            tool_id: filters.tool_id,
            month_year: filters.month_year,
            total_monthly_cost: filters.total_monthly_cost,
            active_users_count: filters.active_users_count,
            sort: filters.sort,
        });
        return reply.send({data: costTracking})
    })
}