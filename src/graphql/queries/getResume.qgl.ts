import { gql } from '@apollo/client';

export const GET_RESUME = gql`
  query getResume($locale: I18NLocaleCode) {
    resume(locale: $locale) {
      data {
        id
        attributes {
          title
          skils
          sub_title
          my_skils_title
          description
          email
          phone
          image {
            data {
              attributes {
                name
                url
              }
            }
          }
          file {
            data {
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
