import { useEffect, useRef } from 'react';

export default function useAutoScroll(dependency: unknown) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [dependency]);

  return messagesEndRef;
}
