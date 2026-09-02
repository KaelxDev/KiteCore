"use client";
import type {KiteModel} from "@/types/model";
export function ModelSelector({models,selectedId,disabled,onChange}:{models:readonly KiteModel[];selectedId:string;disabled?:boolean;onChange:(id:string)=>void}){return <label className="model-select"><span>Modelo</span><select value={selectedId} disabled={disabled} onChange={e=>onChange(e.target.value)}>{models.map(m=><option key={m.id} value={m.id}>{m.name} · {m.tier}</option>)}</select></label>;}
