'use client';

import { useState, useEffect, useRef } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import Header from './Header';
import MainContent from './MainContent';
import { ThreadSelector } from './ThreadSelector';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAIChat } from '../hooks/useAIChat';

import { DEFAULT_MESSAGES } from '../constants/chat.constants';
import type { Message } from '../types/message.types';

interface Thread {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

export default function ChatContainer() {
  const [messages, setMessages] = useLocalStorage<Message[]>('fishChatMessages', DEFAULT_MESSAGES);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const {
    addMessage,
    threads,
    currentThreadId,
    threadsLoading,
    switchThread,
    createNewThread,
  } = useAIChat();

  // Load thread history when thread changes
  useEffect(() => {
    const loadHistory = async () => {
      if (currentThreadId) {
        try {
          const history = await switchThread(currentThreadId);
          const formattedMessages: Message[] = history.map((msg: any) => ({
            id: crypto.randomUUID(),
            isUser: msg.role === 'user',
            content: msg.content,
            timestamp: new Date(),
          }));
          setMessages(formattedMessages);
        } catch (err) {
          console.error('Error loading thread history:', err);
        }
      }
    };

    loadHistory();
  }, [currentThreadId, switchThread, setMessages]);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    const newUserMessage = {
      id: crypto.randomUUID(),
      isUser: true,
      content: message,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsThinking(true);
    
    try {
      const aiResponse = await addMessage(message);
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        isUser: false,
        content: aiResponse,
        timestamp: new Date(),
      }]);
    } catch (err) {
      console.error('Error sending message:', err);
      setMessages(prev => [...prev, {
        id: crypto.randomUUID(),
        isUser: false,
        content: 'Error: Failed to get response from AI service',
        timestamp: new Date(),
      }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      <Header />
      
      <ThreadSelector
        threads={threads.map((threadId: string) => ({
          id: threadId,
          title: `Thread ${threadId.slice(0, 8)}`,
          lastMessage: '',
          timestamp: '',
        }))}
        currentThreadId={currentThreadId}
        onSelectThread={switchThread}
        onCreateNewThread={createNewThread}
      />
      
      <MainContent messages={messages} isThinking={isThinking}>
        <div className="space-y-4 mb-8">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              isUser={message.isUser}
              content={message.content}
              timestamp={message.timestamp}
              isThinking={index === messages.length - 1 && !message.isUser && isThinking}
            />
          ))}
          {isThinking && (
            <ChatMessage
              isUser={false}
              content=""
              isThinking={true}
            />
          )}
          <div ref={messagesEndRef} />
        </div>
      </MainContent>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-[#0E1A26] border-t border-[#4ED8DC26]">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} isThinking={isThinking} />
        </div>
      </div>
    </div>
  );
}