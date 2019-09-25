import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash dog",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash cat (bad idea)",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {

    switch (action.type) {
        case RECEIVE_TODOS:
          const nextState = {};
          action.todos.forEach((todo) => {
              nextState[todo.id] = todo;
          })
          return nextState;

        case RECEIVE_TODO: 
            state = Object.assign({}, state, 
            {
                [action.todo.id]: action.todo
            });
            return state;
        
        default:
            return state;
    }
};

export default todosReducer;