import * as elements from "typed-html";

export default () => {
  const name = "Chris";
  return (
    <html>
      <head>
        <title>Index</title>
      </head>
      <body>
        <h1>{name}</h1>
        <h1>
          <a href="/about">Hello World</a>
        </h1>
      </body>
    </html>
  );
};
