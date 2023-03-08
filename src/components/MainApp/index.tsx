import React from 'react';
import { Form } from 'react-bootstrap';
import { InputNewTodo } from '../InputNewTodo';
import UserSelect from '../UserSelect';
import { connect } from 'react-redux';
/*
* Programmer commentary:
* The two components "InputNewTodo" and "UserSelect" call differently.
* Here again the question of the same style.
* Personally, I’d use "Named Export."
* */

import styles from './MainApp.module.css';

type Todo = {
    title: string,
    user?: number,
    isDone: boolean,
}
/* Programmer commentary:
*  I would add to type "Todo" property "id: number".
*  This is important as we need it in the future.
* */

type MainAppProps = {
    todos: Todo[],
    addTodo: (t: Todo) => void,
    changeTodo: (todos: Todo[]) => void,
}
type MainAppState = {
    todoTitle: string
};

/* Programmer commentary:
*  Change component name from "Index" to "MainApp"
* */
class Index extends React.Component<MainAppProps, MainAppState> {

    constructor(props: MainAppProps) {
        super(props);
        this.state = { todoTitle: '' }
    }
    handleTodoTitle = (todoTitle: string) => {
        this.setState({ todoTitle })
    }

    handleSubmitTodo = (todo: any) => {
        this.props.addTodo(todo)
    }

    render() {
        const { todoTitle } = this.state;
        window.allTodosIsDone = true;
        /* Programmer commentary:
        *  These global variables should be saved in "React context", "Redux" or "localStorage".
        * */

        this.props.todos.map(t => {
            if (!t.isDone) {
                window.allTodosIsDone = false
            } else {
                window.allTodosIsDone = true
            }
        });
        /* Programmer commentary:
        * This loop is utterly illogical.
        * First, as I said, storing data in a "window" is a terrible decision.
        * Second, the use of the "map" method that returns a new array is not logical,
        * you could use "forEach". And thirdly,
        * the best solution would be to do all these checks inside the components themselves.
        * We would then get rid of the extra cycle.
        * */

        return (
            <div>
                <Form.Check type="checkbox" label="all todos is done!" checked={window.allTodosIsDone}/>
                {/* Programmer commentary:
                *  What is missing here is the "onChange" method.
                *  Instead of "window.allTodosIsDone" you should create a local
                */}
                <hr/>
                <InputNewTodo todoTitle={todoTitle} onChange={this.handleTodoTitle} onSubmit={this.handleSubmitTodo}/>
                {this.props.todos.map((t, idx) => (
                    /*
                    * Programmer commentary:
                    * The "key" attribute is not added.
                    * That's a strange name for a variable.
                    * We should call this variable "todoData".
                    * */
                    <div className={styles.todo} >
                        {t.title}
                        <UserSelect user={t.user} idx={idx}/>
                        <Form.Check
                            style={{ marginTop: -8, marginLeft: 5 }}
                            /* Programmer commentary:
                            *  Using inline styles is anti-pattern,
                            *  especially in React. Because when re-rendering,
                            *  these styles will be processed every time.
                            */
                            type="checkbox"
                            checked={t.isDone}
                            onChange={(e) => {
                            /* Programmer commentary:
                            *  The "event" argument is not used. It must be removed!
                            * */
                            const changedTodos = this.props.todos.map((t, index) => {
                                /* Programmer commentary:
                                *  Strange name for variable.
                                *  I would call this variable: "todoData"
                                * */
                                const res = { ...t }
                                /* Programmer commentary:
                                * Here is not a logical reassignment for the variable "res" (not clear name for the variable).
                                * It is necessary to remove and continue to work with the argument "todoData"
                                * */
                                if (index == idx) {
                                    /* Programmer commentary:
                                    *  Change the statement from "==" to "==="
                                    * */
                                    res.isDone = !t.isDone;
                                }
                                return res;
                            })
                            this.props.changeTodo(changedTodos)
                            /* Programmer commentary:
                            *  The "changedTodos" function should be taken from
                            *  "onChange" to make our code more readable.
                            *  Problem with code-style
                            * */
                        }}
                        />
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(
    (state) => ({}),
    /* Programmer commentary:
    *  There is an empty function call. This is not necessary
    * */
    (dispatch) => ({
        addTodo: (todo: any) => {
            dispatch({type: 'ADD_TODO', payload: todo});
        },
        changeTodo: (todos: any) => dispatch({type: 'CHANGE_TODOS', payload: todos}),
        removeTodo: (index: number) => dispatch({type: 'REMOVE_TODOS', payload: index}),
        /* Programmer commentary:
        *  The "removeTodo" method is not used. IDE prompted
        * */
    })
)(Index);

/* Programmer commentary:
*  In general, I recommend this "Class component" to be transformed into "Functional component".
*  So that there are no errors connected because of types.
*
*  If you still need to use the "class component",
*  you can write the following code for "@redux/toolkit":
*
*  const mapStateToProps = (state) => ({
*     count: state.list
*  });
*
*  const mapDispatchToProps = { addTodo, changeTodo }; <-- Need to import this functions
*
*  export default connect(mapStateToProps, mapDispatchToProps)(Index);
* */
