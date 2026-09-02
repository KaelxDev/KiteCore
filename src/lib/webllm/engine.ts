import {CreateWebWorkerMLCEngine,type MLCEngineInterface,type InitProgressReport} from "@mlc-ai/web-llm";
import type {ChatMessage} from "@/types/chat";
let engine:MLCEngineInterface|null=null;let worker:Worker|null=null;
export async function loadKiteModel(modelId:string,onProgress?:(report:InitProgressReport)=>void){
 if(typeof window==="undefined")throw new Error("Kite Engine só pode ser inicializado no navegador.");
 worker?.terminate();worker=new Worker(new URL("../../workers/webllm.worker.ts",import.meta.url),{type:"module"});
 engine=await CreateWebWorkerMLCEngine(worker,modelId,{initProgressCallback:onProgress});return engine;
}
export async function streamKiteResponse(messages:ChatMessage[],onToken:(token:string)=>void){
 if(!engine)throw new Error("Nenhum modelo do Kite foi carregado.");
 const chunks=await engine.chat.completions.create({messages:messages.map(({role,content})=>({role,content})),temperature:.7,stream:true});let complete="";
 for await(const chunk of chunks){const token=chunk.choices[0]?.delta.content??"";if(token){complete+=token;onToken(token);}}return complete;
}
