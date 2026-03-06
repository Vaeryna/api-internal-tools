import {CostTracking} from "../models/cost-tracking.models";
import {findAllCostTrack, findToolTrack} from "../repositories/cost-tracking.repo";

export async function listCostTracking(filters?: {
    tool_id?: number,
    month_year?: number,
    total_monthly_cost?: number,
    min_users?: number,
    max_users?: number,
    sort?: string;
    limit?: number
} | undefined): Promise<CostTracking[] | null> {

    if (filters) return findAllCostTrack(filters)
    return findAllCostTrack()
}


export async function getCostTracking(id: number): Promise<CostTracking | null> {
    return findToolTrack(id)
}