import { createContext, useContext} from 'react';

export const TodoContext = createContext({
    todo:[
        {
            id: 1,
            todo:"todomesg",
            completed: false,
        }
    ],

    addTodo : (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;