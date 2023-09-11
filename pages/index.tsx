// Landing Page (http://localhost:3000 - index.tsx)
import * as elements from "typed-html";
import { db } from "../db";
import { SelectTodo, todos } from "../db/schema";

export default async () => {
  const todosList = await db.select().from(todos).all();
  return (
    <html>
      <head>
        <title>Index</title>
      </head>
      <body>
        <TodoList todos={todosList} />
        <TodoForm />
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

export function TodoItem({ content, completed, id }: SelectTodo) {
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

function TodoForm() {
  return (
    <form
      class="flex flex-row space-x-3"
      hx-post="http://localhost:3000/api/todos"
      hx-swap="beforebegin"
      hx-target="body"
      _="on submit target.reset()"
    >
      <input type="text" name="content" class="border border-black" />
      <button type="submit">Add</button>
    </form>
  );
}
