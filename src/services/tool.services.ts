import {createOneTool, findAllTools, findOneTool, updateOneTool} from "../repositories/tools.repo";
import {CreateTool, Tool, UpdateTool} from "../models/tool.models";


export async function listTools(): Promise<Tool[]> {
    //plus tard : validation de query, defaults, mapping etc
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