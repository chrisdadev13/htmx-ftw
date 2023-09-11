import * as elements from "typed-html";

export default async () => {
  const data = await fetch("http://localhost:3000/api/example");
  const greeting = await data.json();
  return (
    <html>
      <head>
        <title>Index</title>
      </head>
      <body>
        <h1>{greeting.msg}</h1>
        <a href="/about">About</a>
      </body>
    </html>
  );
};
