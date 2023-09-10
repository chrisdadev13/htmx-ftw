import { Elysia } from "elysia";
import { FileSystemRouter } from "bun";
import { BaseHtml } from "./html";
import { html } from "@elysiajs/html";
import * as elements from "typed-html";

const renderPage = async (request: Request) => {
  const router = new FileSystemRouter({
    dir: process.cwd() + "/pages",
    style: "nextjs",
  });

  const route = router.match(request);

  const { default: Root } = await import(route?.filePath!);

  return Root();
};

new Elysia()
  .use(html())
  .all("*", async (context) => {
    const page = await renderPage(context.request);
    return <BaseHtml>{page}</BaseHtml>;
  })
  .listen(3000);
