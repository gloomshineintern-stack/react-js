import {createContext, useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:"todomesg",
            completed: false,
        }
    ],
    addTodo:  (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)//whenever useContext is used we need to specify the context in which we are using it like here reffering to TodoContext
}

export const Todoprovider = TodoContext.Provider