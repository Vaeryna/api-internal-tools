import {FastifyInstance} from "fastify";
import {listCostTracking} from "../services/cost-tracking.services";

export default async function costTrackingRoutes(app: FastifyInstance) {

// Récupérer tous les outils avec filtres facultatifs
    app.get("/", async (request, reply) => {
        const filters = (request.query as {
            tool_id?: number,
            month_year?: number,
            total_monthly_cost?: number,
            min_users?: number,
            max_users?: number,
            sort?: string;
            limit?: number
        })
        const costTracking = await listCostTracking({
            tool_id: filters.tool_id,
            month_year: filters.month_year,
            total_monthly_cost: filters.total_monthly_cost,
            min_users: filters.min_users,
            max_users: filters.max_users,
            sort: filters.sort,
            limit: filters.limit
        });

        return reply.send({data: costTracking})
    })
}