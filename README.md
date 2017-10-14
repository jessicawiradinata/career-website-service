# Career Website API
This repository contains the API for the Career Website. Career Website is a job vacancies web application specifically designed for internship job opportunities. This project is divided in two, the first one is the Web service which is located in this repository and the front end that can be found in this repository: https://github.com/jessicawiradinata/career-website/tree/master. This server is secured using environment variable. So, in order to run this server, .env file that contains the sensitive information to the database account will be needed. This project also use Google Maps API to autocomplete the location for the Job Post.

## Author
This project is created by Jessica (jessicawiradinata), Kevin (KevinKostnerr), and Stefanus Yoshua (syoshua) which are the students of UTS.

## Coding Style
- Braces are required for all control structures
- Variables are using camelCase
- Module namespaces may never be named as a direct child of another module's namespace.
- Filenames should be all lowercase
- Require statements, grouped together immediately following the module declaration
- Use four spaces for indenting
- One statement per line
- Have a comment on every function that describes its purpose
- Column limit of 80 characters
- Don't abbreviate local variable
- Ordinary string literals are delimited with single quotes ('), rather than double quotes (").
- An empty block or block-like construct may be closed immediately after it is opened, with no characters, space, or line break in between (i.e. {}), unless it is a part of a multi-block statement
- Every statement must be terminated with a semicolon.
- Prefer to put all function arguments on the same line as the function name. If doing so would exceed the 80-column limit, the arguments must be line-wrapped in a readable way.

## Getting Started
#### 1. Clone this repository using the command in terminal:
```
git clone https://github.com/jessicawiradinata/career-website-service.git
```
#### 2. Copy the .env to the project directory
#### 3. Change the current directory to the file repository using command:
```
cd career-website-service
```
#### 4. Install the required node modules using command:
```
npm install
```
#### 5. Run the project on the server using command:
 ```
 npm start
 ```
 #### Note: This installation guide is only for the web service, if you wish to use both web service and the front end, you can see the installation guide for the front end side in the front end repository.
 
## APIs methods

### User
* #### GET '/api/users/'
Gets all registered users
* #### POST '/api/users/'
{

     email: String
 
     password: String
 
     name: String
 
     created at: Date
}

Creates a new registered user
* #### GET '/api/users/:userId'
Gets the specified user using userId in the parameter as the key
* #### PUT 'api/users/:userId'
{

     email: String
 
     password: String
 
     name: String
 
     created at: Date
}

Updates the specified user using userId in the parameter as the key
* #### DELETE 'api/users/:userId'
Delete the specified user using userId in the parameterD as the key

### Post
* #### GET 'api/posts/'
Gets all the post created in the application
* #### POST 'api/posts/'

{

     title: String
     
     authorId: String
     
     remuneration: String
     
     location:String
     
     workType: String
     
     closingDate:Date
     
     description:String
     
     skills: [String]
     
     howToApply: String
     
     createdAt: Date
}

Create a new post in the application
* #### GET 'api/posts/users/:userId'
Gets all the post that is owned by the specified user using userId in the parameter as the key
* #### GET 'api/posts/:postId'
Gets the specified post using postId in the parameter as the key
* #### PUT 'api/users/:postId'

{

     title: String
     
     authorId: String
     
     remuneration: String
     
     location:String
     
     workType: String
     
     closingDate:Date
     
     description:String
     
     skills: [String]
     
     howToApply: String
     
     createdAt: Date
}

Updates the specified post using postId in the parameter as the key
* #### DELETE 'api/users/:postId'\
Delete the specified post using the postId in the parameter as the key

### Auth
* #### POST 'api/login/'
{

     email: String
     
     password: String
 
}
* #### POST 'api/resetpassword/'
{

     email: String
 
}
* #### POST 'api/changepassword/'
{

     email: String
     
     password: String
 
}

Check the username and password and login

## Database schema
### User
{
    
     email: String
 
     password: String
 
     name: String
     
     about: String
     
     isAdmin: Boolean
 
     created at: Date
 }

### Post
{

     title: String
     
     authorId: String
     
     remuneration: String
     
     location:String
     
     workType: String
     
     closingDate:Date
     
     description:String
     
     skills: [String]
     
     howToApply: String
     
     createdAt: Date
}

