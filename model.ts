export type ModelTier = "starter" | "standard" | "advanced";
export interface KiteModel { id:string; name:string; tier:ModelTier; description:string; vramRequiredMB:number; contextWindow:number; }
