import { configureStore } from '@reduxjs/toolkit'

/* Programmer commentary:
*  The first thing I want to do in this file is to break it up into files.
*  Leave the configuration "configureStore" in the index.ts and move the rest in the folder "slices/nameSlice".
*
*  The "@redux/toolkit" stuff is not used, namely the handy "createSlice" function is not used.
*  If it is necessary to use "pure redux" then it is better to download "redux" itself.
* */


export default configureStore({
    reducer: {
        list: (state = {todos: []}, action) => {
            /* Programmer commentary:
            *  There are no types for "todos" and "action" arguments.
            *  It is not clear what is in the "action" argument.
            * */
            switch (action.type) {
                case 'ADD_TODO': {
                    const newState = state;
                    newState.todos.push(action.payload);
                    return newState;
                    /* Programmer commentary:
                    * "@redux/toolkit" allows us to work with immutability
                    *  so we can shorten this entry as follows:
                    *  return state.todos.push({
                    *      title: action.payload,
                    *      isDone: false,
                    *  })
                    * */

                }
                case 'REMOVE_TODO': {
                    return {
                        ...state,
                        todos: state.todos.filter((t: any, index: number) => index !== action.payload),
                    };
                    /* Programmer commentary:
                    *  You can shorten this entry with the following code:
                    *  return state.todos
                    *               .filter((todoData: Todo, id) => id !== action.payload)
                    * */
                }
                /* Programmer commentary:
                *  "REMOVE_TODO" is not used anywhere!
                * */
                case 'CHANGE_TODOS': {
                    return {
                        todos: action.payload,
                    };
                    /* Programmer commentary:
                    *  In this code you will need to replace the error with the following:
                    *  return state.todos
                    * */
                }
                default:
                    return state;
            }
        }
    }
})

