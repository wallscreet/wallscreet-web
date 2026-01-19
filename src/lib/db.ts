import { Pool, QueryResultRow } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export async function query<T extends QueryResultRow>(
    text: string, 
    params?: any[]
): Promise<T[]> {
    const res = await pool.query<T>(text, params);
    return res.rows;
}