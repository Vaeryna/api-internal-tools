import {queryMany} from "../db/connection";
import {CostTracking} from "../models/cost-tracking.models";

export async function findAllCostTrack(filters?: {
    tool?: string,
    month_year?: number,
    total_monthly_cost?: number,
    active_users_count?: number,
    min_users?: number,
    max_users?: number
    sort?: string;
    limit?: number
}): Promise<CostTracking[]> {

    const conditions: string[] = []
    const values: unknown[] = []

    let sql = `SELECT *
               FROM cost_tracking`


    if (filters?.tool) {
        values.push(filters.tool)
        conditions.push(`tool_id=(
        SELECT id FROM tools WHERE name ILIKE $${values.length})`)
    }

    if (filters?.month_year) {
        values.push(filters.month_year)
        conditions.push(`month_year= $${values.length}`)
    }
    if (filters?.total_monthly_cost) {
        values.push(filters.total_monthly_cost)
        conditions.push(`total_monthly_cost= $${values.length}`)

    }

    let sort;
    if (filters?.sort) {
        sort = filters.sort
        if (filters.sort === "min_cost") sort = "total_monthly_cost ASC"
        if (filters.sort === "max_cost") sort = "total_monthly_cost DESC"
    }
    if (filters?.min_users) {
        values.push(filters.min_users)
        conditions.push(`active_users_count>=$${values.length}`)
    }

    if (filters?.max_users) {
        values.push(filters.max_users)
        conditions.push(`active_users_count<= $${values.length}`)
    }

    if (conditions.length > 0) {
        sql += ` WHERE ` + conditions.join(" AND ")
    }

    if (filters?.sort) sql += ` ORDER BY ` + sort
    if (filters?.limit) sql += ` LIMIT ` + filters.limit

    return queryMany(sql, values);

}
