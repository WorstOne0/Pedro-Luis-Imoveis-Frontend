const initialState = [];

export default function todoList(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...action.todoList };
    case "REMOVE_TODO":
      return { ...action.todoList };
    default:
      return state;
  }
}
