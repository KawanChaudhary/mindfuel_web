MERN BLOG
Fullstack open source blogging application made with MongoDB, Express, React & Nodejs (MERN)

Configuration and Setup
Key Features
Technologies used
Frontend
Backend
Database
📸 Screenshots
Author
License
Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

Open the project in your prefered code editor.
Go to terminal -> New terminal (If you are using VS code)
Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)
In the first terminal

$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run  start (to start the frontend)
In the second terminal

cd Backend and Set environment variables in config.env under ./config
Create your mongoDB connection url, which you'll use as your MONGO_URI
Supply the following credentials
#  ---  Config.env  ---

NODE_ENV = development
PORT =5000
URI =http://localhost:3000
MONGO_URI =
JWT_SECRET_KEY =
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 

# Nodemailer

SMTP_HOST =smtp.gmail.com
SMTP_PORT =587
EMAIL_USERNAME = example@gmail.com
EMAIL_PASS = your_password
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)
Key Features
User registration and login
Authentication using JWT Tokens
Story searching and pagination
CRUD operations (Story create, read, update and delete)
Upload user ımages and story ımages to the server
Liking stories and adding stories to the Reading list
Commenting on the story
Skeleton loading effect
Responsive Design

Technologies used
This project was created using the following technologies.

Frontend
React js - JavaScript library that is used for building user interfaces specifically for single-page applications
React Hooks - For managing and centralizing application state
react-router-dom - To handle routing
axios - For making Api calls
Css - For User Interface
CK-Editor - Rich Text Editor
uuid - For random id generator
React icons - Small library that helps you add icons to your react apps.
Backend
Node js -A runtime environment to help build fast server applications using JS
Express js -The server for handling and routing HTTP requests
Mongoose - For modeling and mapping MongoDB data to JavaScript
express-async-handler - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers
jsonwebtoken - For authentication
Bcryptjs - For data encryption
Nodemailer - Send e-mails from Node.js
Dotenv - Zero Dependency module that loads environment variables
multer - Node.js middleware for uploading files
slugify - For encoding titles into a URL-friendly format
cors - Provides a Connect/Express middleware
Database
MongoDB - It provides a free cloud service to store MongoDB collections.
Screenshots
1

2

3

4

5

6

7

8

9

10

11
