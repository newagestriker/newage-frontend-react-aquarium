import { useQuery, useApolloClient } from '@apollo/client/react';
import { useState, useEffect, useCallback } from 'react';
import { ClearHistoryDocument, GetThreadHistoryDocument, GetThreadsDocument } from '@/graphql/generated/index'

export const GET_THREADS = GetThreadsDocument;
export const GET_THREAD_HISTORY = GetThreadHistoryDocument;
export const CLEAR_HISTORY = ClearHistoryDocument;

interface ThreadState {
  threads: string[];
  currentThreadId: string | null;
  loading: boolean;
  error: string | null;
}

const DEFAULT_STATE: ThreadState = {
  threads: [],
  currentThreadId: null,
  loading: false,
  error: null,
};

export function useThreads(userId: string) {
  const [state, setState] = useState<ThreadState>(DEFAULT_STATE);
  const client = useApolloClient();

  const { data, loading, error, refetch } = useQuery(GET_THREADS);

  useEffect(() => {
    if (data) {
      setState((prev) => ({
        ...prev,
        threads: data.getThreads || [],
        currentThreadId: prev.currentThreadId || data.getThreads?.[0] || null,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  }, [error]);

  const switchThread = useCallback(
    async (threadId: string) => {
      try {
        const result = await client.query({
          query: GET_THREAD_HISTORY,
          variables: { threadId },
        });

        setState((prev) => ({
          ...prev,
          currentThreadId: threadId,
        }));

        return result.data?.getThreadHistory || [];
      } catch (err) {
        console.error('Error switching thread:', err);
        return [];
      }
    },
    [client]
  );

  const createNewThread = useCallback(async () => {
    try {
      const result = await client.mutate({
        mutation: CLEAR_HISTORY,
        variables: { userId },
      });

      const newThreadId = result.data?.clearHistory || null;
      await refetch();

      setState((prev) => ({
        ...prev,
        currentThreadId: newThreadId,
      }));

      return newThreadId;
    } catch (err) {
      console.error('Error creating new thread:', err);
      throw err;
    }
  }, [client, userId, refetch]);

  return {
    ...state,
    loading,
    switchThread,
    createNewThread,
    refetch,
  };
}
