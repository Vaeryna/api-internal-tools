import {CostTracking} from "../models/cost-tracking.models";
import {findAllCostTrack} from "../repositories/cost-tracking.repo";

export async function listCostTracking(filters?: {
    tool_id?: number,
    month_year?: number,
    total_monthly_cost?: number,
    active_users_count?: number,
    sort?: string;
} | undefined): Promise<CostTracking | null> {

    if (filters) return findAllCostTrack(filters)
    return findAllCostTrack()
}