<H1 align ="center" > MIND FUEL  </h1>

<h4 ><span style="color: red;">Fullstack open source blogging application made with Firebase, MongoDB, Express, React & Nodejs</span> </h4>
<br/>

<h4>Content</h4>

  - * [Live website link](#live-website-link)
  - * [Configuration and Setup](#configuration-and-setup)
  - * [Key Features](#key-features)
  - * [Technologies used](#technologies-used)
      - [Frontend](#frontend)
      - [Backend](#backend)
      - [Database](#database)
  - * [Author](#author)
  - * [License](#license)

## Live website link

<h4>Check the live website : <a href="https://mindfuel-web-frnt.onrender.com/" target="_blank"> Click here </a> 🚀</h4>

<h5>If you enjoy the content, please register and contribute a well-written story.</h5>

## Configuration and Setup

In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the Backend on the other terminal)

In the first terminal

```
$ cd Frontend
$ npm install (to install frontend-side dependencies)
$ npm run start (to start the frontend)

To run the application on localhost change the backend url in directory -> Frontend/src/Axios/axiosInstance.js
Replace `${process.env.REACT_APP_BACKEND_URI}` with "http://localhost:5000/"

```

In the second terminal

- cd Backend and Set environment variables in config.env under ./config.
- Create your mongoDB connection url, which you'll use as your MONGO_URI.
- Setup your firebase app, storage bucket and generating private key JOSN
- Supply the following credentials in .env file.

```

#  ---  Config.env  ---

NODE_ENV = development
PORT =5000
URI =http://localhost:3000
MONGO_URI = Your Mongo URL
JWT_SECRET_KEY = Your secret key
JWT_EXPIRE = 60m
RESET_PASSWORD_EXPIRE = 3600000 

# Nodemailer

SMTP_HOST =smtp.gmail.com
SMTP_PORT =587
EMAIL_USERNAME =  example@gmail.com
EMAIL_PASS = Your Password

# Firebase

STORAGE_BUCKET = Bucket Uri

TYPE = Type of Account

PROJECT_ID = Your project Id

PRIVATE_KEY_ID = Your Private Key id

PRIVATE_KEY = Your Private Key

CLIENT_EMAIL= Your Client Email

CLIENT_ID = Your Client Id

AUTH_URI = Your Auth Uri
 
TOKEN_URI = Your Token

AUTH_PROVIDER_CERT_URL = Your Auth Provider

CLIENT_CERT_URL = Your Client Credential URl

UNIVERSE_DOMAIN = Your Google Domain


```


```
# --- Terminal ---

$ npm install (to install backend-side dependencies)
$ npm start (to start the backend)

```

##  Key Features

- User registration and login
- Authentication using JWT Tokens
- Story searching  and pagination 
- CRUD operations (Story create, read, update and delete)
- Upload user ımages and story ımages  to the server
- Liking  stories and adding stories  to the Reading list
- Commenting  on the story
- Skeleton loading effect
- Responsive Design

<br/>

##  Technologies used

This project was created using the following technologies.

####  Frontend 

- [React js ](https://www.npmjs.com/package/react) - JavaScript library that is used for building user interfaces specifically for single-page applications
- [React Hooks  ](https://reactjs.org/docs/hooks-intro.html) - For managing and centralizing application state
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) - To handle routing
- [axios](https://www.npmjs.com/package/axios) - For making Api calls
- [Css](https://developer.mozilla.org/en-US/docs/Web/CSS) - For User Interface
- [CK-Editor](https://ckeditor.com/docs/ckeditor5/latest/builds/guides/integration/frameworks/react.html) - Rich Text Editor 
- [uuid](https://www.npmjs.com/package/uuid) - For random id generator
- [React icons](https://react-icons.github.io/react-icons/) - Small library that helps you add icons  to your react apps.

####  Backend 

- [Node js](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express js](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Mongoose](https://mongoosejs.com/) - For modeling and mapping MongoDB data to JavaScript
- [express-async-handler](https://www.npmjs.com/package/express-async-handler) - Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers 
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - For authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - For data encryption
- [Nodemailer](https://nodemailer.com/about/) - Send e-mails from Node.js
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero Dependency module that loads environment variables
- [multer](https://www.npmjs.com/package/multer) - Node.js middleware for uploading files 
- [slugify](https://www.npmjs.com/package/slugify) - For encoding titles into a URL-friendly format
- [cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware


####  Database 

- [MongoDB ](https://www.mongodb.com/) - It provides a free cloud service to store MongoDB collections.
- [Firebase](https://www.npmjs.com/package/firebase-admin) - The Firebase Admin Node.js SDK enables access to Firebase services from environments in Node.js for uploading files.
 
 ##  Screenshots 
 

## Author
- Github: [kawanchaudhary](https://github.com/KawanChaudhary)
- Linkedin: [kawanchaudhary](https://www.linkedin.com/in/kawanchaudhary/)
- Email: [kawanchaudhary@gmail.com](mailto:kawanchaudhary@gmail.com)

## License

This project is licensed under the MIT License.
