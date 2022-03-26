import { gql } from '@apollo/client';

export const GET_WORKS = gql`
  query getWorks(
    $filters: WorkFiltersInput
    $pagination: PaginationArg = {}
    $publicationState: PublicationState = LIVE
    $locale: I18NLocaleCode
  ) {
    works(
      filters: $filters
      pagination: $pagination
      publicationState: $publicationState
      locale: $locale
    ) {
      data {
        id
        attributes {
          title
          link
          short_description
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
