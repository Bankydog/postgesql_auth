import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  connectionString: "postgresql://postgres:1234@127.0.0.1:5432/posts",
});

export { pool };
