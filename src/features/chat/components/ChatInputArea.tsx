import React, { forwardRef } from 'react';

interface ChatInputAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  value: string;
  onChange: (value: string) => void;
}

const ChatInputArea = forwardRef<HTMLTextAreaElement, ChatInputAreaProps>(
  ({ value, onChange, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-[#4ED8DC15] rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#4ED8DC] focus:border-transparent bg-[#16263A] text-[#B0C4C8] placeholder-[#9AAEB8]"
        rows={1}
        {...props}
      />
    );
  }
);

export default ChatInputArea;