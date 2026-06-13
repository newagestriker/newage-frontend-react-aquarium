 
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type SendMessageMutationVariables = Exact<{
  message: string;
  userId: string;
}>;


export type SendMessageMutation = { sendMessage: string };

export type GetChatHistoryQueryVariables = Exact<{
  userId: string;
}>;


export type GetChatHistoryQuery = { getChatHistory: Array<string> };

export type GetThreadHistoryQueryVariables = Exact<{
  threadId: string;
}>;


export type GetThreadHistoryQuery = { getThreadHistory: Array<{ role: string, content: string }> };

export type GetThreadsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetThreadsQuery = { getThreads: Array<string> };

export type ClearHistoryMutationVariables = Exact<{
  userId: string;
}>;


export type ClearHistoryMutation = { clearHistory: string };

export type GetAiResponseQueryVariables = Exact<{
  prompt: string;
}>;


export type GetAiResponseQuery = { getAIResponse: string };


export const SendMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SendMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"message"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"message"},"value":{"kind":"Variable","name":{"kind":"Name","value":"message"}}},{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<SendMessageMutation, SendMessageMutationVariables>;
export const GetChatHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getChatHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<GetChatHistoryQuery, GetChatHistoryQueryVariables>;
export const GetThreadHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreadHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getThreadHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"threadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"threadId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]} as unknown as DocumentNode<GetThreadHistoryQuery, GetThreadHistoryQueryVariables>;
export const GetThreadsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetThreads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getThreads"}}]}}]} as unknown as DocumentNode<GetThreadsQuery, GetThreadsQueryVariables>;
export const ClearHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearHistory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}]}}]} as unknown as DocumentNode<ClearHistoryMutation, ClearHistoryMutationVariables>;
export const GetAiResponseDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAIResponse"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAIResponse"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"prompt"},"value":{"kind":"Variable","name":{"kind":"Name","value":"prompt"}}}]}]}}]} as unknown as DocumentNode<GetAiResponseQuery, GetAiResponseQueryVariables>;