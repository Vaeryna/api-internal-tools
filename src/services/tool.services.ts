import {findAllTools} from "../repositories/tools.repo";
import {Tool} from "../models/tools.models";


export async function listTools(): Promise<Tool[]> {
    //plus tard : validation de query, defaults, mapping etc
    return findAllTools()
}