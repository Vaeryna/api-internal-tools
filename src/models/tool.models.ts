export interface Tool {
    id: number,
    name: string,
    description: string,
    vendor: string,
    website_url: string,
    category_id: number,
    monthly_cost: number,
    active_users_count: number,
    owner_department: number,
    status: string,
    created_at: Date,
    update_at: Date
}

export type CreateTool = Omit<Tool, "id" | "created_at" | "update_at">
export type UpdateTool = Partial<CreateTool>