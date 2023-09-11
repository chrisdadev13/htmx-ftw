import * as elements from "typed-html";
import { todos, InsertTodo } from "../db/schema";
import { db } from "../db";
import { TodoItem } from "../pages";

export default async function (body: InsertTodo) {
  const newTodo = await db.insert(todos).values(body).returning().get();
  return <TodoItem {...newTodo} />;
}
