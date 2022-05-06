import { Router } from "express";
import {
  create,
  getList,
  getDetailBySlug,
  getDetailById,
  update,
  softDel,
  forceDel,
  restored
} from "../Controllers/CategoryC";
const router = Router();
router.get("/categories/:id", getDetailById);
router.delete("/categories/:id", softDel);
router.delete("/categories/:id/forcedel", forceDel);
router.patch("/categories/:id/restore", restored);
router.post("/categories", create);
router.get("/categories", getList);
router.get("/categories/:slug", getDetailBySlug);
router.patch("/categories/:id", update);

export default router;
