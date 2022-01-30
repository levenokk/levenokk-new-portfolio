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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type CreateWorkInput = {
  client_name: Scalars['String'];
  descriptions: Array<Scalars['String']>;
  images: Array<Scalars['String']>;
  link: Scalars['String'];
  name: Scalars['String'];
  short_description: Scalars['String'];
  targets: Array<Scalars['String']>;
  tasks: Array<Scalars['String']>;
  time: Scalars['DateTime'];
};

export type EditWorkInput = {
  client_name?: InputMaybe<Scalars['String']>;
  descriptions?: InputMaybe<Array<Scalars['String']>>;
  images?: InputMaybe<Array<Scalars['String']>>;
  link?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  short_description?: InputMaybe<Scalars['String']>;
  targets?: InputMaybe<Array<Scalars['String']>>;
  tasks?: InputMaybe<Array<Scalars['String']>>;
  time?: InputMaybe<Scalars['DateTime']>;
  workId: Scalars['ID'];
};

export type GetWorkAttr = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type LoginInput = {
  login: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createWork: Work;
  editWork: Work;
  removeWork: Scalars['Boolean'];
};


export type MutationCreateWorkArgs = {
  data: CreateWorkInput;
};


export type MutationEditWorkArgs = {
  data: EditWorkInput;
};


export type MutationRemoveWorkArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  createUser: Scalars['Boolean'];
  currentUser: UserModel;
  getWork: Work;
  getWorks: Works;
  singIn: Token;
};


export type QueryGetWorkArgs = {
  id: Scalars['ID'];
};


export type QueryGetWorksArgs = {
  data: GetWorkAttr;
};


export type QuerySingInArgs = {
  data: LoginInput;
};

export type Token = {
  __typename?: 'Token';
  access_token: Scalars['String'];
};

export type UserModel = {
  __typename?: 'UserModel';
  id: Scalars['Int'];
  login: Scalars['String'];
};

export type Work = {
  __typename?: 'Work';
  client_name: Scalars['String'];
  descriptions: Array<Work_Description>;
  id: Scalars['ID'];
  images: Array<Work_Image>;
  link: Scalars['String'];
  name: Scalars['String'];
  short_description: Scalars['String'];
  targets: Array<Work_Target>;
  tasks: Array<Work_Task>;
  time: Scalars['DateTime'];
};

export type Work_Description = {
  __typename?: 'Work_description';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type Work_Image = {
  __typename?: 'Work_image';
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type Work_Target = {
  __typename?: 'Work_target';
  id: Scalars['ID'];
  message: Scalars['String'];
};

export type Work_Task = {
  __typename?: 'Work_task';
  id: Scalars['String'];
  message: Scalars['String'];
};

export type Works = {
  __typename?: 'Works';
  count: Scalars['Int'];
  rows: Array<Work>;
};

export type GetWorkQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetWorkQuery = { __typename?: 'Query', getWork: { __typename?: 'Work', id: string, name: string, link: string, client_name: string, short_description: string, targets: Array<{ __typename?: 'Work_target', id: string, message: string }>, tasks: Array<{ __typename?: 'Work_task', id: string, message: string }>, images: Array<{ __typename?: 'Work_image', id: string, url: string }>, descriptions: Array<{ __typename?: 'Work_description', id: string, message: string }> } };

export type GetWorksQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
}>;


export type GetWorksQuery = { __typename?: 'Query', getWorks: { __typename?: 'Works', count: number, rows: Array<{ __typename?: 'Work', id: string, name: string, link: string, client_name: string, short_description: string, targets: Array<{ __typename?: 'Work_target', id: string, message: string }>, tasks: Array<{ __typename?: 'Work_task', id: string, message: string }>, images: Array<{ __typename?: 'Work_image', id: string, url: string }>, descriptions: Array<{ __typename?: 'Work_description', id: string, message: string }> }> } };


export const GetWorkDocument = gql`
    query getWork($id: ID!) {
  getWork(id: $id) {
    id
    name
    link
    client_name
    short_description
    targets {
      id
      message
    }
    tasks {
      id
      message
    }
    images {
      id
      url
    }
    descriptions {
      id
      message
    }
  }
}
    `;

/**
 * __useGetWorkQuery__
 *
 * To run a query within a React component, call `useGetWorkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkQuery(baseOptions: Apollo.QueryHookOptions<GetWorkQuery, GetWorkQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkQuery, GetWorkQueryVariables>(GetWorkDocument, options);
      }
export function useGetWorkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkQuery, GetWorkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkQuery, GetWorkQueryVariables>(GetWorkDocument, options);
        }
export type GetWorkQueryHookResult = ReturnType<typeof useGetWorkQuery>;
export type GetWorkLazyQueryHookResult = ReturnType<typeof useGetWorkLazyQuery>;
export type GetWorkQueryResult = Apollo.QueryResult<GetWorkQuery, GetWorkQueryVariables>;
export const GetWorksDocument = gql`
    query getWorks($offset: Int, $limit: Int) {
  getWorks(data: {offset: $offset, limit: $limit}) {
    count
    rows {
      id
      name
      link
      client_name
      short_description
      targets {
        id
        message
      }
      tasks {
        id
        message
      }
      images {
        id
        url
      }
      descriptions {
        id
        message
      }
    }
  }
}
    `;

/**
 * __useGetWorksQuery__
 *
 * To run a query within a React component, call `useGetWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorksQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetWorksQuery(baseOptions?: Apollo.QueryHookOptions<GetWorksQuery, GetWorksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorksQuery, GetWorksQueryVariables>(GetWorksDocument, options);
      }
export function useGetWorksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorksQuery, GetWorksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorksQuery, GetWorksQueryVariables>(GetWorksDocument, options);
        }
export type GetWorksQueryHookResult = ReturnType<typeof useGetWorksQuery>;
export type GetWorksLazyQueryHookResult = ReturnType<typeof useGetWorksLazyQuery>;
export type GetWorksQueryResult = Apollo.QueryResult<GetWorksQuery, GetWorksQueryVariables>;