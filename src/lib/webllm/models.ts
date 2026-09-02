import type { KiteModel } from "@/types/model";
export const KITE_MODELS: readonly KiteModel[] = [
 {id:"Qwen2.5-0.5B-Instruct-q4f16_1-MLC",name:"Qwen 2.5 0.5B",tier:"starter",description:"Modelo inicial para dispositivos mais modestos.",vramRequiredMB:944.62,contextWindow:4096},
 {id:"Llama-3.2-1B-Instruct-q4f16_1-MLC",name:"Llama 3.2 1B",tier:"standard",description:"Equilíbrio entre qualidade e velocidade.",vramRequiredMB:879.04,contextWindow:4096},
 {id:"Llama-3.2-3B-Instruct-q4f16_1-MLC",name:"Llama 3.2 3B",tier:"advanced",description:"Modelo mais capaz para prompts complexos.",vramRequiredMB:2263.69,contextWindow:4096}
];
export const DEFAULT_MODEL_ID=KITE_MODELS[0].id;
export function getKiteModel(modelId:string){return KITE_MODELS.find(model=>model.id===modelId);}
