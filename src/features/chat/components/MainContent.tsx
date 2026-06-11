import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import WelcomeMessage from './WelcomeMessage';

interface MainContentProps {
  messages: any[];
  isThinking: boolean;
  children?: React.ReactNode;
}

export default function MainContent({ messages, isThinking, children }: MainContentProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isThinking]);

  return (
    <div className="flex-1 overflow-y-auto p-4">
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
        {children}
        {isThinking && <ChatMessage isThinking={true} />}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}