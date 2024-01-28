import pool from "../db";
import Post from "../models/Post";
import { DataAccess } from "./DataAccess";

export class PostDataAccess implements DataAccess<Post> {
  async add(post: Post): Promise<void> {
    const query =
      "INSERT INTO posts (title,description,body,img,category,postedBy) VALUES ($1, $2, $3, $4, $5, $6)";
    await pool.query(query, [
      post.title,
      post.description,
      post.body,
      post.img,
      post.category,
      post.postedBy,
    ]);
  }

  async get(postId: number): Promise<Post> {
    const query = "SELECT * FROM posts WHERE id = $1";
    const result = await pool.query(query, [postId]);

    if (result.rows.length === 0) {
      throw new Error(`Post with ID ${postId} not found`);
    }

    return result.rows[0];
  }

  async getAll(limit: any): Promise<any> {
    let term = limit.limit;
    const { title } = limit;

    let query = "SELECT * FROM posts LIMIT $1";

    if (title) {
      term = `%${limit.title}%`;

      query = `SELECT * FROM posts WHERE title LIKE $1`;
    }
    const result = await pool.query(query, [term]);

    return result.rows;
  }

  async update(postId: number, updateData: Partial<Post>): Promise<void> {
    let query = "UPDATE posts SET ";
    const updates: string[] = [];
    const values: (string | number)[] = [];

    Object.entries(updateData).forEach(([key, value], index) => {
      updates.push(`${key} = $${index + 1}`);
      values.push(value);
    });

    query += updates.join(", ") + " WHERE id = $" + (values.length + 1);
    values.push(postId);

    const result = await pool.query(query, values);
    if (result.rowCount === 0) {
      throw new Error(`Post with ID ${postId} not found`);
    }
  }

  async delete(postId: number): Promise<void> {
    const query = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(query, [postId]);
    if (result.rowCount === 0) {
      throw new Error(`Post with ID ${postId} not found`);
    }
  }
}
