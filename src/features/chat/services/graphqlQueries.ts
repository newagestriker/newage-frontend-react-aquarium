import { graphqlRequest } from './graphqlClient';
import { SendMessageDocument } from '../../../graphql/generated';

export const sendMessage = async (message: string, userId: string): Promise<string> => {
  const response = await graphqlRequest<{ sendMessage: string }>(
    SendMessageDocument,
    { message, userId },
  );
  return response.sendMessage;
};
