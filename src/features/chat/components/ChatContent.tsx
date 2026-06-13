import React, { useRef } from 'react';
import ChatMessage from './ChatMessage';
import WelcomeMessage from './WelcomeMessage';

interface ChatContentProps {
  messages: any[];
  isThinking: boolean;
  className?: string;
}

export default function ChatContent({ messages, isThinking }: ChatContentProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className='flex-1 overflow-y-auto scrollbar-hide'
    >
      <div className="max-w-4xl mx-auto">
        {messages.length === 0 ? (
          <WelcomeMessage />
        ) : (
          messages.map((message, index) => (
            <ChatMessage
              key={message.id || index}
              isUser={message.isUser}
              content={message.content}
              timestamp={message.timestamp}
              isThinking={false}
            />
          ))
        )}
        {isThinking && <ChatMessage isThinking={true} />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}