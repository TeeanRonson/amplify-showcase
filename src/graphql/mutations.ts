// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createSubscription = /* GraphQL */ `
  mutation CreateSubscription(
    $input: CreateSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    createSubscription(input: $input, condition: $condition) {
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
export const updateSubscription = /* GraphQL */ `
  mutation UpdateSubscription(
    $input: UpdateSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    updateSubscription(input: $input, condition: $condition) {
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
export const deleteSubscription = /* GraphQL */ `
  mutation DeleteSubscription(
    $input: DeleteSubscriptionInput!
    $condition: ModelSubscriptionConditionInput
  ) {
    deleteSubscription(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createReply = /* GraphQL */ `
  mutation CreateReply(
    $input: CreateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    createReply(input: $input, condition: $condition) {
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
export const updateReply = /* GraphQL */ `
  mutation UpdateReply(
    $input: UpdateReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    updateReply(input: $input, condition: $condition) {
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
export const deleteReply = /* GraphQL */ `
  mutation DeleteReply(
    $input: DeleteReplyInput!
    $condition: ModelReplyConditionInput
  ) {
    deleteReply(input: $input, condition: $condition) {
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
