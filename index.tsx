import { Elysia } from "elysia";
import { FileSystemRouter } from "bun";
import { BaseHtml } from "./html";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";
import { autoroutes } from "elysia-autoroutes";

const router = async (request: Request) => {
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
};

const app = new Elysia()
  .use(html())
  .get("*", async (context) => router(context.request))
  .use(
    autoroutes({
      routesDir: "./api",
      prefix: "/api",
    }),
  )
  .listen(3000);

export type ElysiaApp = typeof app;
