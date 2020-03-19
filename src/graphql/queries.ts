// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUserSub = /* GraphQL */ `
  query GetUserSub {
    getUserSub
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSubscription = /* GraphQL */ `
  query GetSubscription($id: ID!) {
    getSubscription(id: $id) {
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
export const listSubscriptions = /* GraphQL */ `
  query ListSubscriptions(
    $filter: ModelSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
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
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        likeType
        toContentType
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getReply = /* GraphQL */ `
  query GetReply($id: ID!) {
    getReply(id: $id) {
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
export const listReplys = /* GraphQL */ `
  query ListReplys(
    $filter: ModelReplyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        edit
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
