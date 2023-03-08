import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserSelect.module.css';

type UserSelectProps = {
    user?: number,
    idx: number,
}

function UserSelect(props: UserSelectProps) {
    const dispatch = useDispatch();
    const todos = useSelector((state: {list: { todos: any[] }}) => state.list.todos);
    /*
        Programmer commentary:
        Since there is no "@redux/toolkit" setting for typescript,
        you have to write the code above.
        You can avoid this error by writing the following:

        export type RootState = ReturnType<typeof store.getState>;
        export type AppDispatch = typeof store.dispatch;
        taken from official docs.
    */
    React.useEffect(
        () => {
            console.log('userSelect');
            /* Programmer commentary:
            *  Inappropriate comment
            */
            fetch('https://jsonplaceholder.typicode.com/users/').then(
                (users) => users.json(),
            ).then(users => setOptions(users))

        },
        [],
    )
    /*
    * Programmer commentary:
    * Again strange code style it is not formatted.
    * If you are too lazy to format then you should use ESlint
    * */
    const [options, setOptions] = React.useState([]);
    /*
    * Programmer commentary:
    * No upper state types specified.
    * It should be at the beginning of the function
    * */

    const { idx } = props;
    /* Programmer commentary:
    *  It should be at the beginning of the function
    * */

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(todos);
        /* Programmer commentary:
        *  It is better to use "debugger" or "React devtools" for more information.
        */
        const changedTodos = todos.map((t, index) => {
            /* Programmer commentary:
            *  Rename argument "t" to "todoData".*/
            const res = { ...t }
            if (index == idx) {
                /* Programmer commentary:
                *  Here you should use "strict comparison"
                *  with the help of the operator ===
                * */
                console.log('props.user', props.user);
                /* Programmer commentary:
                *  It is better to use "debugger" or "React devtools" for more information.
                */
                res.user = e.target.value;
            }
            return res;
        })
        /* Programmer commentary:
        *  This logic could be put into "redux"
        *  and passed on to him the necessary data.
        * */
        dispatch({type: 'CHANGE_TODO', payload: changedTodos})
    }

    return (
        <select name="user" className={styles.user} onChange={handleChange}>
            {options.map((user: any) => <option value={user.id}>{user.name}</option>)}
            {/*
            * Programmer commentary:
            * Type "any" do not use it badly.
            * In addition, these elements have no "key" attribute
            */}
        </select>
    );
}

export default UserSelect;
