import type { Context } from "elysia";

export default async function (body?: any) {
  console.log("working?");
  console.log(body);
  return "Hello World";
}
