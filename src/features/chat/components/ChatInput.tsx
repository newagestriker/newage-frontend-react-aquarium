import React, { useState, useRef } from 'react';
import ChatInputArea from './ChatInputArea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isThinking: boolean;
}

export default function ChatInput({ onSendMessage, isThinking }: ChatInputProps) {
  const [message, setMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isThinking) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-[#4ED8DC15] bg-[#16263A] p-4">
      <div className="max-w-4xl mx-auto">
        <ChatInputArea
          ref={inputRef}
          value={message}
          onChange={setMessage}
          onKeyDown={handleKeyDown}
          placeholder="Type your message here..."
          disabled={isThinking}
        />
        <div className="flex justify-end mt-2">
          <button
            type="submit"
            disabled={!message.trim() || isThinking}
            className="px-4 py-2 bg-[#1FB2A6] text-[#0E1A26] rounded-lg font-medium hover:bg-[#4ED8DC] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
}