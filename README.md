# Social Network API

## Purpose of application
To build an API for a social network web application where users can share their thoughts, react to friends, thoughts, and create a friend list.

## Description
This application build an API for a social network web application that uses a NoSQL database
so that a website can handle large amounts of unstructured data. This application is build using Express.js for routing, a MongoDB database, and the Mongoose ODM.

## Installation
Run following commands to install required packages:

* npm init : Create package.json file and add dependencies and version once added.
* npm i express : To install express.js package for routing.
* npm i mongoose : Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and callbacks.
* mongod : Run this command from gitbash to start mongodb server.
* npm start/ node server.js - Run this command to start an application execution.

## API routes
* User API routes  
  get - api/users - to get all users  
  get - api/users/id - to get user of specific id  
  Post - api/users - Create new user  
  Put - api/users/id - to update user  
  Delete - api/users/id - to delete user by id  

* Thought APT routes  
  get - api/thoughts - to get all thoughts  
  get - api/thoughts/id - to get thought of specific id  
  Post - api/thoughts - Create new thought  
  Put - api/thoughts/id - to update thought  
  Delete - api/thoughts/id - to delete thought by id  

* Friend API routes  
  Post - /api/users/:userId/friends/:friendId - to add a new friend to a user's friend list  
  Delete - /api/users/:userId/friends/:friendId - to remove a friend from a user's friend list.  

* Reactions API routes  
  Post - /api/thoughts/:thoughtId/reactions - to create a reaction stored in a single thought's reactions array field  
  Delete - /api/thoughts/:thoughtId/reactions/:reactionId - to pull and remove a reaction by the reaction's reactionId value  

## Video link

## Mock up images:
The following animations show examples of the application's API routes being tested in Insomnia Core.

##### Get route for all users and thoughts

<div>
    <img src="./images/img1.gif" width="400px"/> 
</div>

##### Get routes for single user and single thought

<div>
    <img src="./images/img2.gif" width="400px"/> 
</div>

##### Post, Put and Delete route for user

<div>
    <img src="./images/img3.gif" width="400px"/> 
</div>

##### Post and Delete route for user friend list

<div>
    <img src="./images/img4.gif" width="400px"/> 
</div>


## Build with:
* node js
* mongodb
* express js
* Javascript
* Mongoose ODM