import { createContext, useContext, useCallback, useState, type ReactNode, type Dispatch, type SetStateAction } from 'react';
import { toast } from 'sonner';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { INITIAL_DATA } from '@/constants/menu';
import type { CartItem, RestaurantData } from '@/types/restaurant';
interface RestaurantContextValue { data:RestaurantData; setData:Dispatch<SetStateAction<RestaurantData>>; cart:CartItem[]; addItem:(item:Omit<CartItem,'key'|'quantity'>)=>void; updateQuantity:(key:string,delta:number)=>void; removeItem:(key:string)=>void; clearCart:()=>void; cartOpen:boolean; setCartOpen:Dispatch<SetStateAction<boolean>>; total:number; count:number }
const RestaurantContext=createContext<RestaurantContextValue|null>(null);
export function RestaurantProvider({children}:{children:ReactNode}) {
 const [data,setData]=useLocalStorage('nf-restaurant-v1',INITIAL_DATA);
 const [cart,setCart]=useLocalStorage<CartItem[]>('nf-cart-v1',[]);
 const [cartOpen,setCartOpen]=useState(false);
 const addItem=useCallback((item:Omit<CartItem,'key'|'quantity'>)=>{const key=`${item.id}-${item.size||'default'}`;setCart(old=>{const found=old.find(x=>x.key===key);return found?old.map(x=>x.key===key?{...x,quantity:x.quantity+1}:x):[...old,{...item,key,quantity:1}];});toast.success(`${item.name}${item.size?` · ${item.size}`:''} added to cart`);},[setCart]);
 const updateQuantity=useCallback((key:string,delta:number)=>setCart(old=>old.map(x=>x.key===key?{...x,quantity:x.quantity+delta}:x).filter(x=>x.quantity>0)),[setCart]);
 const removeItem=useCallback((key:string)=>setCart(old=>old.filter(x=>x.key!==key)),[setCart]);
 return <RestaurantContext.Provider value={{data,setData,cart,addItem,updateQuantity,removeItem,clearCart:()=>setCart([]),cartOpen,setCartOpen,total:cart.reduce((a,x)=>a+x.price*x.quantity,0),count:cart.reduce((a,x)=>a+x.quantity,0)}}>{children}</RestaurantContext.Provider>;
}
export function useRestaurant(){const context=useContext(RestaurantContext);if(!context)throw new Error('RestaurantProvider missing');return context;}
