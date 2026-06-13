import { formatTimestamp } from '../../../utils/timestamp';

interface ChatMessageProps {
  isUser?: boolean;
  content?: string;
  timestamp?: string | Date;
  isThinking?: boolean;
}

export default function ChatMessage({ isUser = false, content = '', timestamp, isThinking = false }: ChatMessageProps) {
  if (isThinking) {
    return (
      <div className="flex justify-start mb-4">
        <div className="bg-[#16263A] border border-[#4ED8DC15] rounded-lg p-4 max-w-2xl">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`rounded-lg p-4 max-w-2xl ${isUser ? 'bg-[#1FB2A6] text-[#0E1A26]' : 'bg-[#16263A] border border-[#4ED8DC15] text-[#B0C4C8]'}`}>
        <div className="whitespace-pre-wrap">{content}</div>
        {timestamp && (
          <div className={`text-xs mt-2 ${isUser ? 'text-[#0E1A26]' : 'text-[#9AAEB8]'}`}>
            {formatTimestamp(timestamp)}
          </div>
        )}
      </div>
    </div>
  );
}