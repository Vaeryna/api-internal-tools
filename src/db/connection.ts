import {Pool, QueryResultRow} from "pg";


const connectionString = process.env.DATABASE_URL
if (!connectionString) throw new Error("DATABASE_URL is missing")


export async function queryOne<T extends QueryResultRow>(sql: string
    , params: any[]): Promise<T | null> {
    const result = await pool.query<T>(sql, params)
    return result.rows[0] ?? null
}

export async function queryMany<T extends QueryResultRow>(sql: string, params: any[]): Promise<T[] | null> {
    const result = await pool.query<T>(sql, params)
    return result.rows
}


export const pool = new Pool({connectionString})

