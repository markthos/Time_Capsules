const { gql } = require("apollo-server-express");

const typeDefs = gql`
  scalar Upload

  type Capsule {
    _id: ID
    title: String!
    date: String!
    location: String
    posts: [Post]
    chat: [LiveChat]
    owner: User
  }
  type Post {
    _id: ID
    url: String!
    thumbnail: String
    date: String!
    upVotes: Int!
    comments: [Comment]
    owner: String!
  }
  type User {
    _id: ID
    username: String!
    firstName: String
    lastName: String
    email: String!
    password: String!
  }
  type LiveChat {
    _id: ID
    text: String!
    date: String!
    author: String!
  }
  type Comment {
    _id: ID
    text: String!
    Author: String!
    date: String!
  }

  type Query {
    me: User
    getChat: [LiveChat]
    getCapsule(_id: ID!): Capsule
    getUsers: [User]
  }

  type File {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }

  type Mutation {
    createCapsule(title: String!, date: String!, owner: ID!): Capsule
    addPost(capsuleId: ID!, text: String!): Post
    deletePost(postId: ID!): Post
    login(username: String!, password: String!): User
    addUser(username: String!, email: String!, password: String!): User
    addChat(text: String!): LiveChat
    uploadFile(file: Upload!): File!
    deleteUser(userId: ID!): User
  }
`;

// TRACKING BASIC USER FLOW

// make account WORKS (small error issue, but saves to db regardless)
// delete account WORKS
//

module.exports = typeDefs;
