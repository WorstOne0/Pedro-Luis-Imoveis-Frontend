export function addTodo(todoList) {
  return {
    type: "ADD_TODO",
    todoList
  };
}

export function removeTodo(todoList) {
  return {
    type: "REMOVE_TODO",
    todoList
  };
}
