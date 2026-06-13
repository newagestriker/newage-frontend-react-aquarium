import { useState } from 'react';
import ChatInput from './ChatInput';
import Header from './Header';
import ChatContent from './ChatContent';
import { ThreadSelector } from './ThreadSelector';
import useLocalStorage from '../hooks/useLocalStorage';
import { useAIChat } from '../hooks/useAIChat';
import { DEFAULT_MESSAGES } from '../constants/chat.constants';
import type { Message } from '../types/message.types';

export default function ChatContainer() {
  const [messages, setMessages] = useLocalStorage<Message[]>('fishChatMessages', DEFAULT_MESSAGES);
  const [isThinking, setIsThinking] = useState(false);
  const { addMessage } = useAIChat();

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
    <div className="h-screen flex flex-col">
      <Header />
      <div className='flex flex-row flex-1 overflow-hidden'>
        <ThreadSelector onThreadChange={(history) =>{ 
        const messages = history.map(({role, content})=>(
          {
        id: crypto.randomUUID(),
        isUser: role === 'user',
        content,
        timestamp: new Date(),
      }

        ))
        setMessages(messages)}} />
      
      <ChatContent messages={messages} isThinking={isThinking} />
      </div>
      
      
      <div className="p-4 bg-[#0E1A26] border-t border-[#4ED8DC26] flex-shrink-0">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} isThinking={isThinking} />
        </div>
      </div>
    </div>
  );
}