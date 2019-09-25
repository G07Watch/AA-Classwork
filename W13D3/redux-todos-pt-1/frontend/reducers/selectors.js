
const allTodos = (state) => {
  return Object.keys(state.todos).map(id => {
    return state.todos[id];
  });
};


window.allTodos = allTodos;
export default allTodos;
