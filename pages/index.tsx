// Landing Page (http://localhost:3000 - index.tsx)
import * as elements from "typed-html";
import { db } from "../db";
import { SelectTodo, todos } from "../db/schema";

export default async () => {
  const data = await fetch("http://localhost:3000/api/example");
  const greeting = await data.json();

  const todosList = await db.select().from(todos).all();
  return (
    <html>
      <head>
        <title>Index</title>
      </head>
      <body>
        <h1>{greeting.msg}</h1>
        <TodoList todos={todosList} />
      </body>
    </html>
  );
};

function TodoList({ todos }: { todos: SelectTodo[] }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem {...todo} />
      ))}
    </div>
  );
}

function TodoItem({ content, completed, id }: SelectTodo) {
  return (
    <div class="flex flex-row space-x-3">
      <p>{content}</p>
      <input
        type="checkbox"
        checked={completed}
        hx-post={`/todos/toggle/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      />
      <button
        class="text-red-500"
        hx-delete={`/todos/${id}`}
        hx-swap="outerHTML"
        hx-target="closest div"
      >
        X
      </button>
    </div>
  );
}
