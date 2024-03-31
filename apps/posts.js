import { Router } from "express";
import { pool } from "../utils/db.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  const result = await pool.query("select * from posts");

  return res.json({
    data: result.fields,
  });
});

export default postRouter;
