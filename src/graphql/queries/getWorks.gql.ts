import { gql } from '@apollo/client';

export const GET_WORKS = gql`
  query getWorks($offset: Int, $limit: Int) {
    getWorks(data: { offset: $offset, limit: $limit }) {
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
