import { gql } from '@apollo/client';

export const GET_WORK = gql`
  query getWork($id: ID, $locale: I18NLocaleCode) {
    work(id: $id, locale: $locale) {
      data {
        id
        attributes {
          title
          short_description
          link
          client_name
          date_start
          date_end
          targets {
            id
            text
          }
          descriptions {
            id
            text
          }
          executed_tasks {
            id
            text
          }
          images {
            data {
              id
              attributes {
                url
              }
            }
          }
          poster {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
