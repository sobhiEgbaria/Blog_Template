import express, { Request, Response } from "express";
import { PostController } from "../Controllers/PostController";
import { PostBL } from "../Services/PostBL";
import { PostDataAccess } from "../DAL/PostDataAccess";

const router = express.Router();
const postController = new PostController(new PostBL(new PostDataAccess()));

router.post(
  "/",
  async (req: Request, res: Response) => await postController.addPost(req, res)
);
router.get(
  "/:id",
  async (req: Request, res: Response) => await postController.getPost(req, res)
);

router.get(
  "/",
  async (req: Request, res: Response) =>
    await postController.getAllPost(req, res)
);

router.put(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.updatePost(req, res)
);
router.delete(
  "/:id",
  async (req: Request, res: Response) =>
    await postController.deletePost(req, res)
);

export default router;
