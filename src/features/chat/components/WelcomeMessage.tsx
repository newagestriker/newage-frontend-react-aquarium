import React from 'react';

export default function WelcomeMessage() {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="mb-6">
        <div className="w-16 h-16 rounded-full bg-[#1FB2A6] flex items-center justify-center mx-auto mb-4">
          <span className="text-[#0E1A26] font-bold text-xl">AI</span>
        </div>
        <h1 className="text-2xl font-bold text-[#B0C4C8] mb-2">Freshwater Fishkeeping Assistant</h1>
        <p className="text-[#9AAEB8]">Ask me anything about fish care, tank setup, or water parameters!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
        <div className="bg-[#16263A] border border-[#4ED8DC15] rounded-lg p-4">
          <h3 className="font-bold text-[#4ED8DC] mb-2">Getting Started</h3>
          <p className="text-[#B0C4C8] text-sm">Learn about tank setup, filtration, and cycling your aquarium.</p>
        </div>
        <div className="bg-[#16263A] border border-[#4ED8DC15] rounded-lg p-4">
          <h3 className="font-bold text-[#4ED8DC] mb-2">Fish Care</h3>
          <p className="text-[#B0C4C8] text-sm">Find information about different fish species and their care requirements.</p>
        </div>
        <div className="bg-[#16263A] border border-[#4ED8DC15] rounded-lg p-4">
          <h3 className="font-bold text-[#4ED8DC] mb-2">Water Parameters</h3>
          <p className="text-[#B0C4C8] text-sm">Understand pH, ammonia, nitrite, and nitrate levels for healthy tanks.</p>
        </div>
        <div className="bg-[#16263A] border border-[#4ED8DC15] rounded-lg p-4">
          <h3 className="font-bold text-[#4ED8DC] mb-2">Troubleshooting</h3>
          <p className="text-[#B0C4C8] text-sm">Get help with common aquarium problems and solutions.</p>
        </div>
      </div>
    </div>
  );
}