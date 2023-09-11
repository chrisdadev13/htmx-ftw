import { todos, InsertTodo } from "../db/schema";
import { db } from "../db";

export default async function (body: InsertTodo) {
  const newTodo = await db.insert(todos).values(body).returning().get();
  return newTodo;
}
