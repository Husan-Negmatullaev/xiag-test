import React from 'react';
import styles from './InputNewTodo.module.css'

/* Programmer commentary:
*   I would change the name of the component from "InputNewTodo" to "CreateTodo". Appropriately changed the name of the types:
*  "InputNewTodoProps" in "CreateTodoProps"
*  "InputNewTodoState" in "CreateTodoProps"
* */

type InputNewTodoProps = {
    todoTitle: string,
    onChange: (todoTitle: string) => void,
    onSubmit: (todo: any) => void,
    /* Programmer commentary:
    *  For some reason, "onChange" and "onSubmit" types such
    *  as ChangeEvent and SubmitEvent are not used.
    * */
}
type InputNewTodoState = {
    value: string
}

export class InputNewTodo extends React.Component<InputNewTodoProps, InputNewTodoState> {
    /* Programmer commentary:
    *  No state was initialized for this component.
    *  Specifically, the "value" state from
    *  Interface "InputNewTodoState"
    * */
    componentDidUpdate(prevProps: Readonly<InputNewTodoProps>, prevState: Readonly<InputNewTodoState>, snapshot?: any) {
        /* Programmer commentary:
        *  In the method "componentDidUpdate()" the call of the argument snapshot
        *  (which still has the type "any" which is very bad) superfluous
        *  since no other method of life cycle "getSnapshotBeforeUpdate()" is used
        * */
        if (this.props.todoTitle !== prevProps.todoTitle) {
            this.setState({value: this.props.todoTitle})
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.onChange(e.target.value);
    }

    handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.keyCode !== 13) {
            /* Programmer commentary:
            *  event.keyCode - this feature is no longer recommended.
            *  I recommend the event.which.
            *
            *  In addition, the condition is very strange ignoring when pressing "Enter".
            *  This is a minus in UX.
            *
            *  In general, I would remove this check (since it is not logical at all) from this function.
            *  I would make a tag "<form>" and in this tag would add "<input>".
            *  And already in the tag "<form>" overdubs props "onSubmit"
            * */
            return;
        }
        event.preventDefault();
        /* Programmer commentary:
        *  Why is this preventDefault call here
        * */

        var val = this.state.value.trim();
        /* Programmer commentary:
        *  Such naming is not appropriate.
        *  I’m not used to quoting the name of variables such as "value" to "val".
        *  I always give the exact name
        *  for variables. For example, I would rename this variable from "val" to "valueTodo".
        * */

        if (val) {
            this.props.onSubmit({
                title: this.state.value,
                isDone: false,
            });
            this.props.onChange('');
        }
    }

    render() {
        return (
            <input
                className={styles['new-todo']}
                type="text"
                value={this.props.todoTitle}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyDown}
                placeholder="What needs to be done?"
            />
        );
    }
}
