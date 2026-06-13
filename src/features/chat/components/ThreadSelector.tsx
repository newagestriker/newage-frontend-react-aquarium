import { MessageCircle, Plus } from 'lucide-react';
import { useThreads } from '../hooks/useThreads';

interface ThreadSelectorProps {
  onThreadChange?: (history :  {
    role: string;
    content: string;
}[]) => void;
  userId?: string;
}

export function ThreadSelector({ onThreadChange, userId = 'anonymous' }: ThreadSelectorProps) {
  const {
    threads,
    currentThreadId,
    switchThread,
    createNewThread,
  } = useThreads( userId );

  const handleSelectThread = async (threadId: string) => {
    const response = await switchThread(threadId);
    onThreadChange?.(response);
  };

  const handleCreateNewThread = async () => {
    await createNewThread();
  };
  return (
    <div className="border-r border-[#4ED8DC15] bg-[#16263A] w-64 flex flex-col">
      <div className="p-4 border-b border-[#4ED8DC15]">
        <button 
          onClick={handleCreateNewThread}
          className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#1FB2A6] text-[#0E1A26] hover:bg-[#4ED8DC] transition-colors"
        >
          <Plus className="w-4 h-4" />
          New Chat
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {threads.map((threadId: string) => (
            <button
              key={threadId}
              onClick={() => handleSelectThread(threadId)}
              className={`w-full text-left p-3 rounded-lg transition-colors ${
                currentThreadId === threadId 
                  ? 'bg-[#1FB2A6] text-[#0E1A26]' 
                  : 'hover:bg-[#1FB2A6]/20 text-[#B0C4C8]'
              }`}
            >
              <div className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="font-medium truncate">Thread {threadId.slice(0, 8)}</div>
                  <div className="text-xs text-[#9AAEB8] truncate"></div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}