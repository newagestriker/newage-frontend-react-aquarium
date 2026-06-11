import { useMutation } from '@tanstack/react-query';
import { sendMessage } from '../services/graphqlQueries';
import { useThreads } from './useThreads';

export function useAIChat(userId: string = 'anonymous') {
  const {
    mutateAsync: sendChatMessage,
    isPending: isSending,
    error: sendError,
  } = useMutation<string, Error, { message: string; userId: string }>({
    mutationFn: ({ message, userId }) => sendMessage(message, userId),
  });

  const {
    threads,
    currentThreadId,
    loading: threadsLoading,
    switchThread,
    createNewThread,
  } = useThreads(userId);

  const addMessage = async (prompt: string): Promise<string> => {
    const response = await sendChatMessage({ message: prompt, userId });
    return response;
  };

  return {
    addMessage,
    isThinking: isSending,
    error: sendError,
    threads,
    currentThreadId,
    threadsLoading,
    switchThread,
    createNewThread,
  };
}
