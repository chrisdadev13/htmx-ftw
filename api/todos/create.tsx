import * as elements from "typed-html";
import { Context } from "elysia";
import { InsertTodo, todos } from "../../db/schema";
import { TodoItem } from "../../pages";
import { db } from "../../db";

export async function post(ctx: Context) {
  const newTodo = await db
    .insert(todos)
    .values(ctx.body as InsertTodo)
    .returning()
    .get();
  return <TodoItem {...newTodo} />;
}
