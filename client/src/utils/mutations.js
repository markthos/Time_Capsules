import { gql } from "@apollo/client";

export const ADD_CHAT = gql`
  mutation addChat($text: String!, $author: String!, $capsuleId: ID!) {
    addChat(text: $text, author: $author, capsuleId: $capsuleId) {
      _id
      text
      date
      author
    }
  }
`;

export const REGISTER_USER = gql`
  mutation addUser($username: String!, $firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      _id
      username
      email
      # ... other fields you want to query
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadPost($file: Upload!) {
    uploadPost(file: $file) {
      public_id
      secure_url
    }
  }
`;

export const ADD_CAPSULE = gql`
  mutation CreateCapsule($title: String!, $eventPic: String!, $date: String!, $location: String!) {
    createCapsule(title: $title, date: $date, eventPic: $eventPic, location: $location) {
      _id
      title
      date
      location
      eventPic
    }
  }
`;

export const UPVOTE = gql`
  mutation upVote($capsuleId: ID!, $postId: ID!) {
    upVote(capsuleId: $capsuleId, postId: $postId) {
      upVotes
    }
  }
`;

// export const DOWNVOTE = gql`
//   mutation downVote($capsuleId: ID!, $postId: ID!) {
//   }
// `

// export const ADD_COMMENT = gql`
//   mutation addPost($capsuleId: ID!, $text: String!) {
//   }
// `
