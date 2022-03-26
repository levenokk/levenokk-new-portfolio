import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
  mutation sendMessage($data: MessageInput!) {
    createMessage(data: $data) {
      data {
        id
      }
    }
  }
`;
