import {queryOne} from "../db/connection";
import {CostTracking} from "../models/cost-tracking.models";

export async function findAllCostTrack(filters?: {
    tool_id?: number,
    month_year?: number,
    total_monthly_cost?: number,
    active_users_count?: number,
    sort?: string;
}): Promise<CostTracking | null> {

    const conditions: string[] = []
    const values: unknown[] = []

    let sql = `SELECT *
               FROM tools`


    if (filters?.tool_id) {
        values.push(filters.tool_id)
        conditions.push(`category_id=(
        SELECT id FROM categories WHERE name=$${values.length})`)
    }

    if (filters?.month_year) {
        values.push(filters.month_year)
        conditions.push(`status= $${values.length}`)
    }
    if (filters?.total_monthly_cost) {
        values.push(filters.total_monthly_cost)
        conditions.push(`status= $${values.length}`)
    }
    if (filters?.active_users_count) {
        values.push(filters.active_users_count)
        conditions.push(`status= $${values.length}`)
    }

    let sort;
    if (filters?.sort) {
        sort = filters.sort
        if (filters.sort === "min_cost") sort = "monthly_cost ASC"
        if (filters.sort === "max_cost") sort = "monthly_cost DESC"
    }

    return queryOne<CostTracking>(`SELECT *
                                   FROM cost_tracking`, []
    )
}
