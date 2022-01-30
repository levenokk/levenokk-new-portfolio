import { gql } from '@apollo/client';

export const GET_WORK = gql`
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
