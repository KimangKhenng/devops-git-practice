import { Router } from "express";

const router = Router();

router.get("/user_info", (req, res) => {
  res.json({ name: "Panharith", age: 22 });
});

export default router;
