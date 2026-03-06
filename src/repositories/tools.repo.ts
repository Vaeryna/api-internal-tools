import {queryMany, queryOne} from "../db/connection";
import {CreateTool, Tool, UpdateTool} from "../models/tool.models";


export async function findAllTools(): Promise<Tool[]> {
    return queryMany(`SELECT id, name
                      FROM tools`, [])
}

export async function findOneTool(id: number): Promise<Tool | null> {
    console.log("findOneTOol", id)
    return queryOne<Tool>(`SELECT *
                           FROM tools
                           WHERE id = $1`,
        [id]
    )
}

export async function createOneTool(tool: CreateTool): Promise<Tool | null> {
    const result = queryOne<Tool>(`INSERT INTO tools (name,
                                                      description,
                                                      vendor,
                                                      website_url,
                                                      category_id,
                                                      monthly_cost,
                                                      active_users_count,
                                                      owner_department,
                                                      status)
                                   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
        [tool.name, tool.description, tool.vendor, tool.website_url, tool.category_id, tool.monthly_cost, tool.active_users_count, tool.owner_department, tool.status])

    if (!result) throw new Error("Tool creation failed")

    return result
}

export async function updateOneTool(id: number, tool: UpdateTool): Promise<Tool | null> {
    const result = queryOne<Tool>(`UPDATE tools
                                   SET name              = COALESCE($2, name),
                                       description       = COALESCE($3, description),
                                       vendor= COALESCE($4, vendor),
                                       website_url= COALESCE($5, website_url),
                                       category_id= COALESCE($6, category_id),
                                       monthly_cost= COALESCE($7, monthly_cost),
                                       active_users_count= COALESCE($8, active_users_count),
                                       owner_department= COALESCE($9, owner_department),
                                       status= COALESCE($10, status),
                                       updated_at= CURRENT_TIMESTAMP
                                   WHERE id = $1 RETURNING *`,
        [
            id,
            tool.name ?? null,
            tool.description ?? null,
            tool.vendor ?? null,
            tool.website_url ?? null,
            tool.category_id ?? null,
            tool.monthly_cost ?? null,
            tool.active_users_count ?? null,
            tool.owner_department ?? null,
            tool.status ?? null
        ])

    if (!result) throw new Error("Tool update failed")
    return result
}
