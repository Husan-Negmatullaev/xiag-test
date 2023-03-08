# More information about this project

### How can I quickly find my comments on this project?
Search by text - Programmer commentary

### About Iframe
There is a problem in our application. When our application launches, the "yarn start" or "npm start" command in our
the application appears "iframe", which prevents us from interacting with the interface.

There are three ways to address this problem:
1. Create the file ". env" in the root folder and write the following:
   "FAST_REFRESH=false"

2. In the file "index.css" write the following:
   body > iframe {
   Event pointers: not available
   }

3. Update the "react-scripts" module to version 5

### About project
The project is made with the "create-react-app" command. The Webpack settings in "create-react-app" are huge, it is better to use "vite" or make your own builder on Webpack.

### About File naming
Calling components through "index.tsx" is a bad idea because it will be difficult to navigate the project in search and further development of the project.

### About code style
There are no code analyzers of the following types in this project: ESlint, Stylelint and Prettier formatter. You can work without them in projects which require high speed of development and if only one programmer works on this project. But in our case these technologies are needed!

### About Packages and bundles
Some packages viz:
"@testing-library/jest-dom",
"@testing-library/react",
"@testing-library/user-event",
"@types/jest",
"@types/node",
"@types/react" and
"@types/react-dom"
should be moved to "devDependencies".
This will not affect the "bundle", but it is correct for the semantics.

### About Default Export
I mostly use named export and try to use the default export as little as possible

### About typescript
This project does not use full typescript. Many variables are given type "any" which is very bad

### About using "@redux/toolkit" in this project
The use of "@redux/toolkit" in this project is not clear to me, as this project is not difficult in terms of business logic. It was possible to make all the logic on the  "react-context" or simply passing props.

### About the architecture of the project.
There is nothing to say about architecture, as this application does not use any popular method of application architecture introduction such as: MVC, Pure Architecture, FSD, ONION (Multilayer), Reactive Architecture
