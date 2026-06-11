export interface Message {
  id: string;
  isUser: boolean;
  content: string;
  timestamp: Date;
}