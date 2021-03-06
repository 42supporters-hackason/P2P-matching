import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type AuthPayLoad = {
  __typename?: 'AuthPayLoad';
  token: Scalars['String'];
  user: User;
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String'];
  createdBy: User;
  id: Scalars['Int'];
  post: Post;
};

export type Mutation = {
  __typename?: 'Mutation';
  authGithub: AuthPayLoad;
  createMessage: Message;
  deletePost: Post;
  post: Post;
  registerNavigator: Post;
  updateMe?: Maybe<User>;
  updatePost: Post;
};


export type MutationAuthGithubArgs = {
  code: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  content: Scalars['String'];
  postId: Scalars['String'];
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};


export type MutationPostArgs = {
  description: Scalars['String'];
  requiredSkillsId: Array<Scalars['Int']>;
  title: Scalars['String'];
};


export type MutationRegisterNavigatorArgs = {
  navigatorId: Scalars['Int'];
  postId: Scalars['String'];
};


export type MutationUpdateMeArgs = {
  bio?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdatePostArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  requiredSkillsIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  title?: InputMaybe<Scalars['String']>;
};

export type Post = {
  __typename?: 'Post';
  completedAt?: Maybe<Scalars['DateTime']>;
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  driver?: Maybe<User>;
  id: Scalars['String'];
  messages: Array<Message>;
  navigator?: Maybe<User>;
  requiredSkills: Array<Skill>;
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  feed: Array<Post>;
  me: User;
  messagesByPostId: Array<Message>;
  myDrivingPosts: Array<Post>;
  myMatchedPosts: Array<Post>;
  post?: Maybe<Post>;
  skills: Array<Skill>;
  unmatchedPosts: Array<Maybe<Post>>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryMessagesByPostIdArgs = {
  postId: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Int'];
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  waitForMessage?: Maybe<Message>;
};


export type SubscriptionWaitForMessageArgs = {
  postId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  bio: Scalars['String'];
  driverPost: Array<Post>;
  githubId: Scalars['String'];
  githubLogin: Scalars['String'];
  id: Scalars['Int'];
  matchingPoint: Scalars['Int'];
  name: Scalars['String'];
  navigatorPost: Array<Post>;
};

export type SignInMutationVariables = Exact<{
  code: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', authGithub: { __typename?: 'AuthPayLoad', token: string, user: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } } };

export type UpdateProfileMutationVariables = Exact<{
  name: Scalars['String'];
  bio: Scalars['String'];
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateMe?: { __typename?: 'User', name: string, bio: string } | null };

export type CreatePostMutationVariables = Exact<{
  description: Scalars['String'];
  title: Scalars['String'];
  requiredSkillsId: Array<Scalars['Int']> | Scalars['Int'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', post: { __typename?: 'Post', description: string, title: string, requiredSkills: Array<{ __typename?: 'Skill', id: number, name: string }>, driver?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null } };

export type SendMessageMutationVariables = Exact<{
  postId: Scalars['String'];
  content: Scalars['String'];
}>;


export type SendMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: number, content: string } };

export type DeletePostMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: { __typename?: 'Post', id: string } };

export type MatchPostMutationVariables = Exact<{
  postId: Scalars['String'];
  navigatorId: Scalars['Int'];
}>;


export type MatchPostMutation = { __typename?: 'Mutation', registerNavigator: { __typename?: 'Post', navigator?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null } };

export type UpdatePostMutationVariables = Exact<{
  id: Scalars['String'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  requiredSkillsIds?: InputMaybe<Array<InputMaybe<Scalars['Int']>> | InputMaybe<Scalars['Int']>>;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string } };

export type FetchSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchSkillsQuery = { __typename?: 'Query', skills: Array<{ __typename?: 'Skill', id: number, name: string }> };

export type FetchUnmatchedPostQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchUnmatchedPostQuery = { __typename?: 'Query', unmatchedPosts: Array<{ __typename?: 'Post', id: string, description: string, title: string, driver?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null, requiredSkills: Array<{ __typename?: 'Skill', id: number, name: string }> } | null> };

export type FetchMyPostQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMyPostQuery = { __typename?: 'Query', myDrivingPosts: Array<{ __typename?: 'Post', id: string, description: string, title: string, requiredSkills: Array<{ __typename?: 'Skill', id: number, name: string }> }> };

export type FetchMatchedPostQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMatchedPostQuery = { __typename?: 'Query', myMatchedPosts: Array<{ __typename?: 'Post', id: string, description: string, title: string, navigator?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null, driver?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null, requiredSkills: Array<{ __typename?: 'Skill', id: number, name: string }> }> };

export type FetchSpecificPostQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FetchSpecificPostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, description: string, title: string, navigator?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null, driver?: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } | null, requiredSkills: Array<{ __typename?: 'Skill', id: number, name: string }> } | null };

export type FetchMessagesQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type FetchMessagesQuery = { __typename?: 'Query', messagesByPostId: Array<{ __typename?: 'Message', id: number, content: string, createdBy: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } }> };

export type FetchMeQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchMeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } };

export type FetchMessageSubscriptionVariables = Exact<{
  postId: Scalars['String'];
}>;


export type FetchMessageSubscription = { __typename?: 'Subscription', waitForMessage?: { __typename?: 'Message', id: number, content: string, createdBy: { __typename?: 'User', id: number, name: string, githubLogin: string, matchingPoint: number, bio: string } } | null };


export const SignInDocument = gql`
    mutation SignIn($code: String!) {
  authGithub(code: $code) {
    token
    user {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($name: String!, $bio: String!) {
  updateMe(name: $name, bio: $bio) {
    name
    bio
  }
}
    `;
export type UpdateProfileMutationFn = Apollo.MutationFunction<UpdateProfileMutation, UpdateProfileMutationVariables>;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      name: // value for 'name'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useUpdateProfileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProfileMutation, UpdateProfileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProfileMutation, UpdateProfileMutationVariables>(UpdateProfileDocument, options);
      }
export type UpdateProfileMutationHookResult = ReturnType<typeof useUpdateProfileMutation>;
export type UpdateProfileMutationResult = Apollo.MutationResult<UpdateProfileMutation>;
export type UpdateProfileMutationOptions = Apollo.BaseMutationOptions<UpdateProfileMutation, UpdateProfileMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($description: String!, $title: String!, $requiredSkillsId: [Int!]!) {
  post(
    description: $description
    title: $title
    requiredSkillsId: $requiredSkillsId
  ) {
    description
    title
    requiredSkills {
      id
      name
    }
    driver {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
}
    `;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      description: // value for 'description'
 *      title: // value for 'title'
 *      requiredSkillsId: // value for 'requiredSkillsId'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($postId: String!, $content: String!) {
  createMessage(postId: $postId, content: $content) {
    id
    content
  }
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const DeletePostDocument = gql`
    mutation deletePost($id: String!) {
  deletePost(id: $id) {
    id
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const MatchPostDocument = gql`
    mutation matchPost($postId: String!, $navigatorId: Int!) {
  registerNavigator(postId: $postId, navigatorId: $navigatorId) {
    navigator {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
}
    `;
export type MatchPostMutationFn = Apollo.MutationFunction<MatchPostMutation, MatchPostMutationVariables>;

/**
 * __useMatchPostMutation__
 *
 * To run a mutation, you first call `useMatchPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMatchPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [matchPostMutation, { data, loading, error }] = useMatchPostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      navigatorId: // value for 'navigatorId'
 *   },
 * });
 */
export function useMatchPostMutation(baseOptions?: Apollo.MutationHookOptions<MatchPostMutation, MatchPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MatchPostMutation, MatchPostMutationVariables>(MatchPostDocument, options);
      }
export type MatchPostMutationHookResult = ReturnType<typeof useMatchPostMutation>;
export type MatchPostMutationResult = Apollo.MutationResult<MatchPostMutation>;
export type MatchPostMutationOptions = Apollo.BaseMutationOptions<MatchPostMutation, MatchPostMutationVariables>;
export const UpdatePostDocument = gql`
    mutation UpdatePost($id: String!, $title: String, $description: String, $requiredSkillsIds: [Int]) {
  updatePost(
    id: $id
    title: $title
    description: $description
    requiredSkillsIds: $requiredSkillsIds
  ) {
    id
  }
}
    `;
export type UpdatePostMutationFn = Apollo.MutationFunction<UpdatePostMutation, UpdatePostMutationVariables>;

/**
 * __useUpdatePostMutation__
 *
 * To run a mutation, you first call `useUpdatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePostMutation, { data, loading, error }] = useUpdatePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      requiredSkillsIds: // value for 'requiredSkillsIds'
 *   },
 * });
 */
export function useUpdatePostMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePostMutation, UpdatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePostMutation, UpdatePostMutationVariables>(UpdatePostDocument, options);
      }
export type UpdatePostMutationHookResult = ReturnType<typeof useUpdatePostMutation>;
export type UpdatePostMutationResult = Apollo.MutationResult<UpdatePostMutation>;
export type UpdatePostMutationOptions = Apollo.BaseMutationOptions<UpdatePostMutation, UpdatePostMutationVariables>;
export const FetchSkillsDocument = gql`
    query fetchSkills {
  skills {
    id
    name
  }
}
    `;

/**
 * __useFetchSkillsQuery__
 *
 * To run a query within a React component, call `useFetchSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchSkillsQuery(baseOptions?: Apollo.QueryHookOptions<FetchSkillsQuery, FetchSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchSkillsQuery, FetchSkillsQueryVariables>(FetchSkillsDocument, options);
      }
export function useFetchSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchSkillsQuery, FetchSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchSkillsQuery, FetchSkillsQueryVariables>(FetchSkillsDocument, options);
        }
export type FetchSkillsQueryHookResult = ReturnType<typeof useFetchSkillsQuery>;
export type FetchSkillsLazyQueryHookResult = ReturnType<typeof useFetchSkillsLazyQuery>;
export type FetchSkillsQueryResult = Apollo.QueryResult<FetchSkillsQuery, FetchSkillsQueryVariables>;
export const FetchUnmatchedPostDocument = gql`
    query fetchUnmatchedPost {
  unmatchedPosts {
    id
    description
    title
    driver {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
    requiredSkills {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchUnmatchedPostQuery__
 *
 * To run a query within a React component, call `useFetchUnmatchedPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUnmatchedPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUnmatchedPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUnmatchedPostQuery(baseOptions?: Apollo.QueryHookOptions<FetchUnmatchedPostQuery, FetchUnmatchedPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchUnmatchedPostQuery, FetchUnmatchedPostQueryVariables>(FetchUnmatchedPostDocument, options);
      }
export function useFetchUnmatchedPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchUnmatchedPostQuery, FetchUnmatchedPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchUnmatchedPostQuery, FetchUnmatchedPostQueryVariables>(FetchUnmatchedPostDocument, options);
        }
export type FetchUnmatchedPostQueryHookResult = ReturnType<typeof useFetchUnmatchedPostQuery>;
export type FetchUnmatchedPostLazyQueryHookResult = ReturnType<typeof useFetchUnmatchedPostLazyQuery>;
export type FetchUnmatchedPostQueryResult = Apollo.QueryResult<FetchUnmatchedPostQuery, FetchUnmatchedPostQueryVariables>;
export const FetchMyPostDocument = gql`
    query fetchMyPost {
  myDrivingPosts {
    id
    description
    title
    requiredSkills {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchMyPostQuery__
 *
 * To run a query within a React component, call `useFetchMyPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMyPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMyPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMyPostQuery(baseOptions?: Apollo.QueryHookOptions<FetchMyPostQuery, FetchMyPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMyPostQuery, FetchMyPostQueryVariables>(FetchMyPostDocument, options);
      }
export function useFetchMyPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMyPostQuery, FetchMyPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMyPostQuery, FetchMyPostQueryVariables>(FetchMyPostDocument, options);
        }
export type FetchMyPostQueryHookResult = ReturnType<typeof useFetchMyPostQuery>;
export type FetchMyPostLazyQueryHookResult = ReturnType<typeof useFetchMyPostLazyQuery>;
export type FetchMyPostQueryResult = Apollo.QueryResult<FetchMyPostQuery, FetchMyPostQueryVariables>;
export const FetchMatchedPostDocument = gql`
    query fetchMatchedPost {
  myMatchedPosts {
    id
    description
    title
    navigator {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
    driver {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
    requiredSkills {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchMatchedPostQuery__
 *
 * To run a query within a React component, call `useFetchMatchedPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMatchedPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMatchedPostQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMatchedPostQuery(baseOptions?: Apollo.QueryHookOptions<FetchMatchedPostQuery, FetchMatchedPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMatchedPostQuery, FetchMatchedPostQueryVariables>(FetchMatchedPostDocument, options);
      }
export function useFetchMatchedPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMatchedPostQuery, FetchMatchedPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMatchedPostQuery, FetchMatchedPostQueryVariables>(FetchMatchedPostDocument, options);
        }
export type FetchMatchedPostQueryHookResult = ReturnType<typeof useFetchMatchedPostQuery>;
export type FetchMatchedPostLazyQueryHookResult = ReturnType<typeof useFetchMatchedPostLazyQuery>;
export type FetchMatchedPostQueryResult = Apollo.QueryResult<FetchMatchedPostQuery, FetchMatchedPostQueryVariables>;
export const FetchSpecificPostDocument = gql`
    query fetchSpecificPost($id: String!) {
  post(id: $id) {
    id
    description
    title
    navigator {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
    driver {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
    requiredSkills {
      id
      name
    }
  }
}
    `;

/**
 * __useFetchSpecificPostQuery__
 *
 * To run a query within a React component, call `useFetchSpecificPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchSpecificPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchSpecificPostQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFetchSpecificPostQuery(baseOptions: Apollo.QueryHookOptions<FetchSpecificPostQuery, FetchSpecificPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchSpecificPostQuery, FetchSpecificPostQueryVariables>(FetchSpecificPostDocument, options);
      }
export function useFetchSpecificPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchSpecificPostQuery, FetchSpecificPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchSpecificPostQuery, FetchSpecificPostQueryVariables>(FetchSpecificPostDocument, options);
        }
export type FetchSpecificPostQueryHookResult = ReturnType<typeof useFetchSpecificPostQuery>;
export type FetchSpecificPostLazyQueryHookResult = ReturnType<typeof useFetchSpecificPostLazyQuery>;
export type FetchSpecificPostQueryResult = Apollo.QueryResult<FetchSpecificPostQuery, FetchSpecificPostQueryVariables>;
export const FetchMessagesDocument = gql`
    query fetchMessages($postId: String!) {
  messagesByPostId(postId: $postId) {
    id
    content
    createdBy {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
}
    `;

/**
 * __useFetchMessagesQuery__
 *
 * To run a query within a React component, call `useFetchMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMessagesQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFetchMessagesQuery(baseOptions: Apollo.QueryHookOptions<FetchMessagesQuery, FetchMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMessagesQuery, FetchMessagesQueryVariables>(FetchMessagesDocument, options);
      }
export function useFetchMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMessagesQuery, FetchMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMessagesQuery, FetchMessagesQueryVariables>(FetchMessagesDocument, options);
        }
export type FetchMessagesQueryHookResult = ReturnType<typeof useFetchMessagesQuery>;
export type FetchMessagesLazyQueryHookResult = ReturnType<typeof useFetchMessagesLazyQuery>;
export type FetchMessagesQueryResult = Apollo.QueryResult<FetchMessagesQuery, FetchMessagesQueryVariables>;
export const FetchMeDocument = gql`
    query fetchMe {
  me {
    id
    name
    githubLogin
    matchingPoint
    bio
  }
}
    `;

/**
 * __useFetchMeQuery__
 *
 * To run a query within a React component, call `useFetchMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchMeQuery(baseOptions?: Apollo.QueryHookOptions<FetchMeQuery, FetchMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchMeQuery, FetchMeQueryVariables>(FetchMeDocument, options);
      }
export function useFetchMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchMeQuery, FetchMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchMeQuery, FetchMeQueryVariables>(FetchMeDocument, options);
        }
export type FetchMeQueryHookResult = ReturnType<typeof useFetchMeQuery>;
export type FetchMeLazyQueryHookResult = ReturnType<typeof useFetchMeLazyQuery>;
export type FetchMeQueryResult = Apollo.QueryResult<FetchMeQuery, FetchMeQueryVariables>;
export const FetchMessageDocument = gql`
    subscription fetchMessage($postId: String!) {
  waitForMessage(postId: $postId) {
    id
    content
    createdBy {
      id
      name
      githubLogin
      matchingPoint
      bio
    }
  }
}
    `;

/**
 * __useFetchMessageSubscription__
 *
 * To run a query within a React component, call `useFetchMessageSubscription` and pass it any options that fit your needs.
 * When your component renders, `useFetchMessageSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchMessageSubscription({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useFetchMessageSubscription(baseOptions: Apollo.SubscriptionHookOptions<FetchMessageSubscription, FetchMessageSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<FetchMessageSubscription, FetchMessageSubscriptionVariables>(FetchMessageDocument, options);
      }
export type FetchMessageSubscriptionHookResult = ReturnType<typeof useFetchMessageSubscription>;
export type FetchMessageSubscriptionResult = Apollo.SubscriptionResult<FetchMessageSubscription>;