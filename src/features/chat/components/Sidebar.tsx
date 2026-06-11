import React, { useState } from 'react';
import { useAIChat } from '../hooks/useAIChat';

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const { threads, currentThreadId, threadsLoading, switchThread, createNewThread } = useAIChat('user-123');

  const formatThreadId = (id: string) => {
    if (id.length > 12) {
      return `${id.slice(0, 8)}...${id.slice(-4)}`;
    }
    return id;
  };

  return (
    <div className="w-64 bg-[#16263A] p-4 rounded-2xl h-full flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#4ED8DC]">Newage Aquarium</h1>
        <p className="text-[#9AAEB8] text-sm">Freshwater Guide</p>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl bg-[#1B2D43] text-[#4ED8DC]">
              <span>💬</span>
              <span>Chat</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-[#F4FBFB] hover:bg-[#1B2D43]">
              <span>🐟</span>
              <span>Fish Database</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-[#F4FBFB] hover:bg-[#1B2D43]">
              <span>💧</span>
              <span>Water Parameters</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 p-3 rounded-xl text-[#F4FBFB] hover:bg-[#1B2D43]">
              <span>🌡️</span>
              <span>Temperature Guide</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Session Selector */}
      <div className="mt-4 pt-4 border-t border-[#4ED8DC26]">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-[#9AAEB8]">Sessions</h3>
          <button
            onClick={createNewThread}
            className="text-xs text-[#4ED8DC] hover:text-[#3BB8B4] transition-colors"
            title="New Session"
          >
            + New
          </button>
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-2 p-2 rounded-lg text-[#F4FBFB] hover:bg-[#1B2D43] text-sm"
        >
          <span>📋</span>
          <span className="flex-1 text-left">
            {currentThreadId ? formatThreadId(currentThreadId) : 'No session'}
          </span>
          <span className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>▼</span>
        </button>

        {expanded && (
          <div className="mt-2 space-y-1 max-h-40 overflow-y-auto">
            {threadsLoading ? (
              <div className="text-xs text-[#9AAEB8] p-2">Loading...</div>
            ) : threads.length === 0 ? (
              <div className="text-xs text-[#9AAEB8] p-2">No sessions</div>
            ) : (
              threads.map((threadId) => (
                <button
                  key={threadId}
                  onClick={() => switchThread(threadId)}
                  className={`w-full text-left p-2 rounded-lg text-xs transition-colors ${
                    threadId === currentThreadId
                      ? 'bg-[#1B2D43] text-[#4ED8DC]'
                      : 'text-[#9AAEB8] hover:bg-[#1B2D43] hover:text-[#F4FBFB]'
                  }`}
                >
                  {formatThreadId(threadId)}
                </button>
              ))
            )}
          </div>
        )}
      </div>
      
      <div className="mt-auto pt-4 border-t border-[#4ED8DC26]">
        <div className="flex items-center gap-2 p-2 rounded-lg text-[#9AAEB8] text-sm">
          <span>👤</span>
          <span>User-123</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
