import { useEffect, useState } from 'react';
import { toast } from 'sonner';
export function useLocalStorage<T>(key:string, initial:T) {
 const [value,setValue] = useState<T>(()=>{const saved=localStorage.getItem(key);return saved?JSON.parse(saved) as T:initial;});
 useEffect(()=>{const serialized=JSON.stringify(value);if(serialized.length>3500000){toast.error('Local preview storage is full. Use image URLs instead of more uploads. Changes will not persist until space is reduced.');return;}localStorage.setItem(key,serialized);},[key,value]);
 return [value,setValue] as const;
}
