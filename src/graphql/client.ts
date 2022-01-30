import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

import { API_HOST } from '../constants/';
import { paginationMerge } from './pagination-merge';

const httpLink = new HttpLink({
  uri: API_HOST,
});

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    for (const graphQLError of graphQLErrors) {
      console.log('graphQLError: ', graphQLError);

      if (graphQLError.message === 'Context creation failed: INVALID_TOKEN') {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
      }
    }
  } else if (networkError) {
    console.log('networkError: ', networkError);
  }
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        fields: {
          ...paginationMerge('getWorks'),
        },
      },
    },
  }),
});
