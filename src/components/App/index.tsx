import React from 'react';
import logo from '../../logo.svg';
/* Programmer commentary:
   I would remove the unnecessary import call here
*/
import './App.css';
/*
* Programmer commentary:
* Other components use "Module CSS",
* and in this component the usual "CSS".
* What is it not clear? I wish all the components
* were in the same style.
* */

import MainApp from '../MainApp';
import {
    useSelector,
} from 'react-redux';

/* Programmer commentary:
* There is no code style in this project.
* The project needs an ESlint code handler
* */

function App() {
    const todos = useSelector((state: {list: { todos: any[] }}) => state.list.todos);
    {/*
        Programmer commentary:
        Since there is no "@redux/toolkit" setting for typescript,
        you have to write the code above.
        You can avoid this error by writing the following:

        export type RootState = ReturnType<typeof store.getState>;
        export type AppDispatch = typeof store.dispatch;
        taken from official docs.

        Do not destroy the data in "Redux selectors" (although you did not do it).
        Because we don’t subscribe to a specific key but to the entire object of the "selector".
    */}
  return (
    // todo list for users:
    /* Programmer commentary:
    *  Not the right comment.
    * */
    <div className="App main">
      <header className="App-header">
        TODO list with users:
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*
            Programmer commentary:
            You shouldn't put code in the comments,
            it's not a deliberate action why drag this code into github.
            I would remove this code
        */}
      </header>
        {/* MAIN APP: */}
        {/*
            Programmer commentary:
            Another useless comment in the code.
            If the code needs a comment to explain it, then it's bad code
        */}

        <MainApp todos={todos}/>
        {/*
            Programmer commentary:
            Since there is no typescript setting for "@redux/toolkit",
            we see these type errors.
        */}

        <footer className='App-footer'>
              <a
                href="https://example.org"
                target="_blank"
                className={"App-footer-link"}
              >
                All right reserved
              </a>
        </footer>
        {/*
           Programmer commentary:
           Again, this project lacks the ESlint code analyzer.
           That it would check for code style,
           so that no one would violate it
         */}
    </div>
  );
}

{/*
   Programmer commentary:
   Blocks like "header" and "footer" I would make as components.
   Even if the project is small I would still make these blocks as components.
*/}

export default App;
