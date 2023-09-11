import { Elysia } from "elysia";
import { FileSystemRouter } from "bun";
import { BaseHtml } from "./html";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { drizzle } from "drizzle-orm/libsql";
import { client } from "./db/drizzle.config";

const router = async (
  request: Request,
  body?: { [key: string]: any } | unknown,
) => {
  const { pathname } = new URL(request.url, `http://localhost`);

  if (!pathname.startsWith("/api/")) {
    const router = new FileSystemRouter({
      dir: process.cwd() + "/pages",
      style: "nextjs",
    });

    console.log(pathname);

    const route = router.match(request);

    const { default: Root } = await import(route?.filePath!);

    const page = await Root();
    return <BaseHtml>{page}</BaseHtml>;
  }

  const parts = pathname.split("/");

  if (parts.length > 1 && parts[1] === "api") {
    parts.splice(1, 1);
  }

  const result: string = "/" + parts.slice(1).join("/");

  const router = new FileSystemRouter({
    dir: process.cwd() + "/api",
    style: "nextjs",
  });

  const route = router.match(result);

  const { default: Root } = await import(route?.filePath!);

  const data = await Root(body);

  return data;
};

export const db = drizzle(client);

new Elysia()
  .use(html())
  .all("*", async (context) => router(context.request, context.body))
  .listen(3000);
