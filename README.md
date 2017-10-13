# Career Website API
This repository contains the API for the Career Website. This server is secured using environment variable. The front end can be found in this repository: https://github.com/jessicawiradinata/career-website/tree/master

## Getting Started
#### 1. Clone this repository using the command in terminal:
```
git clone https://github.com/jessicawiradinata/career-website-service.git
```
#### 2. Change the current directory to the file repository using command:
```
cd career-website-service
```
#### 2. Change the current directory to the file repository using command:
```
copy the .env file into the project directory
```
#### 4. Install the required node modules using command:
```
npm install
```
#### 5. Run the project on the server using command:
 ```
 npm start
 ```
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
Gets the specified user using user ID as the key
* #### PUT 'api/users/:userId'
{

     email: String
 
     password: String
 
     name: String
 
     created at: Date
}

Updates the specified user using user ID as the key
* #### DELETE 'api/users/:userId'
Delete the specified user using the user ID as the key

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
Gets all the post that is owned by the specified user using the user ID as the key
* #### GET 'api/posts/:postId'
Gets the specified post using post ID as the key
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

Updates the specified post using post ID as the key
* #### DELETE 'api/users/:postId'\
Delete the specified post using the post ID as the key

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
