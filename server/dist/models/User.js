"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(id, username, email, authStatus) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.authStatus = authStatus;
    }
}
exports.default = User;
// postgres create user table
// CREATE TABLE users (
//   id BIGSERIAL NOT NULL PRIMARY KEY,
//   date   DATE  DEFAULT CURRENT_DATE,
//   username VARCHAR(50) NOT NULL,
//   email VARCHAR(100) NOT NULL,
//   authStatus TEXT NOT NULL
// );
// INSERT INTO users (username,email,authStatus)
// VALUES('user 3' ,'user@gmail.com','User');
//postgres create user table
// CREATE TABLE posts (
//   id BIGSERIAL NOT NULL PRIMARY KEY,
//   date   DATE NOT NULL DEFAULT CURRENT_DATE,
//   title VARCHAR(50) NOT NULL,
//   description VARCHAR(50) NOT NULL,
//   body TEXT NOT NULL,
// 	img TEXT NOT NULL,
//   category VARCHAR(50)NOT NULL,
//   postedBy VARCHAR(50) NOT NULL);
// INSERT INTO posts (title,description,body,img,category,postedBy)
// VALUES('third blog' ,'description 333333333','body 3333333333','https://images.unsplash.com/photo-1629019725048-75f3fd5edd1c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D','web','sobhi');
