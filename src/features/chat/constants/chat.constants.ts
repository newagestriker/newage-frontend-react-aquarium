
import { type Message } from '../types/message.types';

const FIXED_TIMESTAMP = new Date(2026, 4, 20, 19, 59);

export const DEFAULT_MESSAGES: Message[] = [
  {
    id: crypto.randomUUID(),
    isUser: false,
    content: "Hello! I'm your freshwater fishkeeping assistant. Ask me anything about fish care, tank setup, or water parameters!",
    timestamp: FIXED_TIMESTAMP
  },
  {
    id: crypto.randomUUID(),
    isUser: true,
    content: "Hi there! I'm setting up a new aquarium. What should I consider?",
    timestamp: FIXED_TIMESTAMP
  },
  {
    id: crypto.randomUUID(),
    isUser: false,
    content: "Great question! When setting up a new aquarium, consider these key factors:\n\n1. **Tank Size** - Start with at least 10 gallons for beginners\n2. **Filtration** - Essential for maintaining water quality\n3. **Cycling** - Allow 4-6 weeks for beneficial bacteria to establish\n4. **Water Parameters** - Test pH, ammonia, nitrite, and nitrate levels\n5. **Fish Selection** - Choose compatible species for your tank size",
    timestamp: FIXED_TIMESTAMP
  }
];