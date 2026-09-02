const KEY="kite:selected-model";
export function getSelectedModelId(defaultModel:string){return typeof window==="undefined"?defaultModel:window.localStorage.getItem(KEY)??defaultModel;}
export function setSelectedModelId(modelId:string){if(typeof window!=="undefined")window.localStorage.setItem(KEY,modelId);}
