import React from 'react';
import { MessageCircle, Plus, Settings } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-[#4ED8DC15] bg-[#16263A]">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <MessageCircle className="w-6 h-6 text-[#4ED8DC]" />
          <h1 className="text-xl font-bold text-[#B0C4C8]">Freshwater Fishkeeping Assistant</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg bg-[#1FB2A6] text-[#0E1A26] hover:bg-[#4ED8DC] transition-colors">
            <Plus className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-[#1FB2A6] text-[#0E1A26] hover:bg-[#4ED8DC] transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}