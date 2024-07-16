


## Tech Stacks:
    
    1) Front-end:
        * React (HTML5, JS, CSS3)
        * React
        * Redux (React-redux, redux-thunk)
        * Chakra Ui
        * External CSS Libraries (Styled-Components, framer-motion,Slicka,)

    2) Back-end:
        * Node
        * Express
        * Mongoose (server-databse)
        * www.cyclic.sh (To Deploy Server)

    3) DataBase:
        * MongoDB (MongoDB Atlas)

## Dependencies:

### Front-end

    1) react
    2) react-dom
    3) react-scripts
    4) styled-components
    5) react-router-dom
    6) react-icons
    7) chakra ui realated libararies including chakra icons
    8) react-slick
    9) axios
    10) redux, redux thunk, react-redux

### Backend

    1) express
    2) cors
    3) dotenv
    4) mongoose
    5) nodemon


## Setting Up Project in local

### Frontend

#### 1) Setting up node environment

    1) navigate to Front-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install in both front end and back end directories 

#### 2) Starting frontend on localhost
(make sure you are confirming url of server)

    npm start /*or*/ npm run start

#### 3) Making Production ready folder

    npm run build

### Server
#### 1) Setting up node environment

    1) navigate to Back-end directory
    2) use node version 16 or higher. version 18 is recommended
    3) run command npm install


#### 1) Starting Server in deployment

    npm start

#### 1) Starting Server with nodemon on locahost

    npm run server

### Database: MongoDB

#### 1) Atlas

    in .env file provide MONGODB_URL with proper credentials

#### 2) Local database

    if MONGODB_URL not declared in .env, by default it will connect to local data base

    in case not working try changing MONGODB_URL in Back-end/config/db.js



