import { Context } from "elysia";
import { db } from "../../db";
import { todos } from "../../db/schema";
import { eq } from "drizzle-orm";

export async function del(ctx: Context) {
  await db
    .delete(todos)
    .where(eq(todos.id, parseInt(ctx!.params!.id as string)))
    .run();
}
