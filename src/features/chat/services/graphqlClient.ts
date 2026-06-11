import { GraphQLClient } from 'graphql-request';
import type { TypedDocumentNode } from '@graphql-typed-document-node/core';

const GRAPHQL_ENDPOINT = import.meta.env.VITE_CHAT_GRAPHQL_ENDPOINT

export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT);
export const graphqlRequest = async <T>(document: TypedDocumentNode<any, any>, variables?: Record<string, unknown>): Promise<T> => {
  return graphqlClient.request(document, variables || {});
};
