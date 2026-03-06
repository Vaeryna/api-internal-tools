import {pool} from "../db/connection";
import {Tool} from "../models/tools.models";


export async function findAllTools(): Promise<Tool[]> {
    const result = await pool.query("SELECT id, name FROM tools");
    return result.rows;
}