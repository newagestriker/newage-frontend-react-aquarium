
export default function ThinkingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1FB2A6]">
        <span className="font-medium text-xs text-[#0E1A26]">AI</span>
      </div>
      <div className="rounded-2xl p-4 max-w-3xl bg-[#16263A] border border-[#4ED8DC15] text-[#B0C4C8]">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-[#4ED8DC] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
          <span className="text-sm">Thinking...</span>
        </div>
      </div>
    </div>
  );
}