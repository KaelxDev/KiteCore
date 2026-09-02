export type DeviceCapability="unsupported"|"supported";
export interface DeviceCapabilities{webgpu:DeviceCapability;}
export async function getDeviceCapabilities():Promise<DeviceCapabilities>{
 if(typeof navigator==="undefined"||!("gpu" in navigator))return{webgpu:"unsupported"};
 try{const gpu=(navigator as Navigator & {gpu?:{requestAdapter():Promise<unknown>}}).gpu;return{webgpu:(await gpu?.requestAdapter())?"supported":"unsupported"};}catch{return{webgpu:"unsupported"};}
}
