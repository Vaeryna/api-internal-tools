import {createOneTool, findAllTools, findOneTool, updateOneTool} from "../repositories/tools.repo";
import {CreateTool, Tool, UpdateTool} from "../models/tool.models";


export async function listTools(filters?: { status?: string; category?: string; limit?: number; min_cost?: number; max_cost?: number; sort?: string; } | undefined): Promise<Tool[]> {
    //plus tard : validation de query, defaults, mapping etc
    if(filters) return findAllTools(filters)
    return findAllTools()
}

export async function getTool(id: number): Promise<Tool | null> {
    return findOneTool(id)
}

export async function createTool(newTool: CreateTool): Promise<Tool | null> {
    return createOneTool(newTool)
}

export async function updateTool(id: number, update: UpdateTool): Promise<Tool | null> {
    return updateOneTool(id, update)
}