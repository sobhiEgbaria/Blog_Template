import { Request, Response } from "express";
import Post from "../models/Post";
import { PostBL } from "../Services/PostBL";

export class PostController {
  private postBL: PostBL;

  constructor(postBL: PostBL) {
    this.postBL = postBL;
  }

  async addPost(req: Request, res: Response): Promise<void> {
    const postData = req.body;
    const post = new Post(
      postData.id,
      postData.date,
      postData.title,
      postData.description,
      postData.body,
      postData.img,
      postData.category,
      postData.postedBy
    );
    try {
      await this.postBL.addPost(post);
      res.status(201).send({ message: `Post created successfully` });
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async getPost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    try {
      const post = await this.postBL.getPost(postId);
      res.status(200).send(post);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async filterByTitle(req: Request, res: Response): Promise<void> {
    const title = req.params.title;
    try {
      const posts = await this.postBL.filterByTitle(title);
      res.status(200).send(posts);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async getAllPost(req: Request, res: Response) {
    const limit = req.query.limit;
    try {
      const posts = await this.postBL.getALLPost(limit);
      const postArray = [];
      for (let value of posts) {
        postArray.push(value);
      }
      res.status(200).send(postArray);
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async updatePost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    const postData = req.body;
    try {
      await this.postBL.updatePost(postId, postData);
      res.status(200).send({ message: `Post ${postId} updated successfully` });
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }

  async deletePost(req: Request, res: Response): Promise<void> {
    const postId = +req.params.id;
    try {
      await this.postBL.deletePost(postId);
      res.status(200).send({ message: `Post ${postId} deleted successfully` });
    } catch (error) {
      res.status(400).send((error as Error).message);
    }
  }
}
