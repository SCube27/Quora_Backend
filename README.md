# Quora_Backend
Complete End to End Backend System for a Q&amp;A Quora / Reddit like application with all the necessary APIs to run it.

### Tech Stack Used:
1. JavaScript
2. Node.js
3. Express
4. MongoDB

## How to setup the project:
1. Clone the project
```
git clone https://github.com/SCube27/Quora_Backend.git
```

2. Install all the dependencies for the project
```
npm install
```

3. Setup an .env file by referring the template.env file (Create a new database server on Mongo Atlas site)

4. Start the project
```
npm run start
```

## Service APIs and Working:

### User Service APIs:
1. ***Create a new User:***
    - API: ```localhost:4000/api/v1/users```
    - Req Type: **POST**
    - Requires: User Body with username, email, bio etc.

2. ***Get a User Profile:***
    - API: ```localhost:4000/api/v1/users/{userId}```
    - Req Type: **GET**
    - Requires: Parameter as userId in request.

3. ***Updating the User Profile:***
    - API: ```localhost:4000/api/v1/users/{userId}```
    - Req Type: **PUT**
    - Requires: Parameter as userId in request.

### Question Service APIs: 
1. ***Posting a new question:***
    - API: ```localhost:4000/api/v1/questions```
    - Req Type: **POST**
    - Requires: Question body with userId, title, question body, topicTags

2. ***Searching questions based on tags and text:***
    - API: ```localhost:4000/api/v1/questions/search?text={text to be searched}&tags={tag1}&tags={tag2}...```
    - Req Type: **GET**
    - Requires: Queries in the API request in form of a text and multiple tags from present topics on app.

### Answer Service APIs:
1. ***Posting a new answer to a question:***
    - API: ```localhost:4000/api/v1/questions/{questionId}/answers```
    - Req Type: **POST**
    - Requires: Answer body with the userId of user and text containing answer & questionId in params of API.

2. ***Updating an already posted answer:***
    - API: ```localhost:4000/api/v1/answers/{answerId}```
    - Req Type: **PUT**
    - Requires: Update answer body with new text to be updated & answerId to be updated in params of API.

### Comment Service APIs: 
1. ***Commenting on an answer:***
    - API: ```localhost:4000/api/v1/answers/{answerId}/comments```
    - Req Type: **POST**
    - Requires: Comment body with userId & text of comment and answerId in params of API to be commented on.

2. ***Commenting on a comment:***
    - API: ```localhost:4000/api/v1/comments/{commentId}/comments```
    - Req Type: **POST**
    - Requires: Comment body with userId & text of comment and commentId in params of API to be commented on.

### Like Service API:
1. ***Liking a Question, Answer or Comment:***
    - API: ```localhost:4000/api/v1/{type}/{id}/likes```
    - Req Type: **POST**
    - Requires: Req body containing Id of user liking & API params containing type: [Question, Answer, Comment] to be liked and its unique Id.

### Follow Service API:
1. ***Following a user on application:***
    - API: ```localhost:4000/api/v1/users/{userId}/follow/{targetUserId}```
    - Req Type: **POST**
    - Requires: API params for userId of user following and targetUserId of user to be followed.

### Topic Service API:
1. ***Posting a new Topic Tag on Application:***
    - API: ```localhost:4000/api/v1/topics```
    - Req Type: **POST**
    - Requires: Request body with the name of the topic.

2. ***Getting all the topics present on the application:***
    - API: ```localhost:4000/api/v1/topics```
    - Req Type: **GET**

* [**NOTE**: The value of localhost in the above APIs is dummy and would change according to the PORT used in your application]