// tslint:disable
// this is an auto generated file. This will be overwritten

export const id = /* GraphQL */ `
  subscription Id {
    id
  }
`;
export const by = /* GraphQL */ `
  subscription By {
    by {
      id
      sub
      username
      firstName
      lastName
      headline
      location
      subscribedTo {
        nextToken
      }
      subscribedBy {
        nextToken
      }
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      replies {
        nextToken
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const to = /* GraphQL */ `
  subscription To {
    to {
      id
      sub
      username
      firstName
      lastName
      headline
      location
      subscribedTo {
        nextToken
      }
      subscribedBy {
        nextToken
      }
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      replies {
        nextToken
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createdAt = /* GraphQL */ `
  subscription CreatedAt {
    createdAt
  }
`;
export const updatedAt = /* GraphQL */ `
  subscription UpdatedAt {
    updatedAt
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      sub
      username
      firstName
      lastName
      headline
      location
      subscribedTo {
        nextToken
      }
      subscribedBy {
        nextToken
      }
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      replies {
        nextToken
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      sub
      username
      firstName
      lastName
      headline
      location
      subscribedTo {
        nextToken
      }
      subscribedBy {
        nextToken
      }
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      replies {
        nextToken
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      sub
      username
      firstName
      lastName
      headline
      location
      subscribedTo {
        nextToken
      }
      subscribedBy {
        nextToken
      }
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      replies {
        nextToken
      }
      likes {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateSubscription = /* GraphQL */ `
  subscription OnCreateSubscription($owner: String!) {
    onCreateSubscription(owner: $owner) {
      id
      by {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      to {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      onCreateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onUpdateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onDeleteUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onCreateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onUpdateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onDeleteSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onCreateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onUpdateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onDeleteLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onCreatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeletePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const onUpdateSubscription = /* GraphQL */ `
  subscription OnUpdateSubscription($owner: String!) {
    onUpdateSubscription(owner: $owner) {
      id
      by {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      to {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      onCreateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onUpdateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onDeleteUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onCreateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onUpdateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onDeleteSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onCreateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onUpdateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onDeleteLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onCreatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeletePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const onDeleteSubscription = /* GraphQL */ `
  subscription OnDeleteSubscription($owner: String!) {
    onDeleteSubscription(owner: $owner) {
      id
      by {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      to {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      onCreateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onUpdateUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onDeleteUser {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      onCreateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onUpdateSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onDeleteSubscription {
        id
        createdAt
        updatedAt
        owner
      }
      onCreateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onUpdateLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onDeleteLike {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      onCreatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdatePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeletePost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onCreateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onUpdateReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      onDeleteReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike($owner: String!) {
    onCreateLike(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      userId
      likeType
      toContentType
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike($owner: String!) {
    onUpdateLike(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      userId
      likeType
      toContentType
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike($owner: String!) {
    onDeleteLike(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      userId
      likeType
      toContentType
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      toReply {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String!) {
    onCreatePost(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String!) {
    onUpdatePost(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String!) {
    onDeletePost(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($owner: String!) {
    onCreateComment(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      replies {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($owner: String!) {
    onUpdateComment(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      replies {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($owner: String!) {
    onDeleteComment(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toPost {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      replies {
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateReply = /* GraphQL */ `
  subscription OnCreateReply($owner: String!) {
    onCreateReply(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateReply = /* GraphQL */ `
  subscription OnUpdateReply($owner: String!) {
    onUpdateReply(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteReply = /* GraphQL */ `
  subscription OnDeleteReply($owner: String!) {
    onDeleteReply(owner: $owner) {
      id
      user {
        id
        sub
        username
        firstName
        lastName
        headline
        location
        createdAt
        updatedAt
        owner
      }
      data
      edit
      likes {
        nextToken
      }
      toComment {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const owner = /* GraphQL */ `
  subscription Owner {
    owner
  }
`;
