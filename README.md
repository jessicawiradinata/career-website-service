# Career Website API
This repository contains the API for the Career Website. 

## Getting Started
#### 1. Clone this repository using the command in terminal:
```
git clone https://github.com/jessicawiradinata/career-website-service.git
```
#### 2. Change the current directory to the file repository using command:
```
cd career-website-service
```
#### 3. Install the required node modules using command:
```
npm install
```
#### 4. Run the project on the server using command:
 ```
 npm start
 ```
## APIs methods

### User
* #### GET '/api/users/'
Gets all registered users
* #### POST '/api/users/'
Creates a new registered user
* #### GET '/api/users/:userId'
Gets the specified user using user ID as the key
* #### PUT 'api/users/:userId'
Updates the specified user using user ID as the key
* #### DELETE 'api/users/:userId'
Delete the specified user using the user ID as the key

### Post
* #### GET 'api/posts/'
Gets all the post created in the application
* #### POST 'api/posts/'
Create a new post in the application
* #### GET 'api/posts/users/:userId'
Gets all the post that is owned by the specified user using the user ID as the key
* #### GET 'api/posts/:postId'
Gets the specified post using post ID as the key
* #### PUT 'api/users/:postId'
Updates the specified post using post ID as the key
* #### DELETE 'api/users/:postId'
Delete the specified post using the post ID as the key
