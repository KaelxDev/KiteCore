export type ChatRole = "system" | "user" | "assistant";
export interface ChatMessage { id:string; role:ChatRole; content:string; createdAt:number; }
export interface StoredChat { id:string; title:string; messages:ChatMessage[]; updatedAt:number; }
