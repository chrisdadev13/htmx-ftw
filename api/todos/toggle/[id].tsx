import * as elements from "typed-html";
import { Context } from "elysia";
import { db } from "../../../db";
import { todos } from "../../../db/schema";
import { eq } from "drizzle-orm";
import { TodoItem } from "../../../pages";

export async function post(ctx: Context) {
  if (!ctx.params) {
    return { msg: "Cannot be undefined" };
  }
  const oldTodo = await db
    .select()
    .from(todos)
    .where(eq(todos.id, parseInt(ctx.params.id as string)))
    .get();

  const newTodo = await db
    .update(todos)
    .set({ completed: !oldTodo!.completed })
    .where(eq(todos.id, parseInt(ctx.params.id as string)))
    .returning()
    .get();

  return <TodoItem {...newTodo} />;
}
