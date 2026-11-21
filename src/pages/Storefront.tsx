import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Hero from '@/components/features/Hero';
import Categories from '@/components/features/Categories';
import MenuSection from '@/components/features/MenuSection';
import BestSellers from '@/components/features/BestSellers';
import Deals from '@/components/features/Deals';
import Contact from '@/components/features/Contact';
export default function Storefront(){const [params,setParams]=useSearchParams();const location=useLocation();const category=params.get('category')||'all';const query=params.get('search')||'';const select=(id:string)=>{if(id==='deals')return;setParams(old=>{old.set('category',id);old.delete('search');return old;},{replace:true});};const search=(q:string)=>setParams(old=>{if(q)old.set('search',q);else old.delete('search');return old;},{replace:true});useEffect(()=>{if(location.hash){const id=decodeURIComponent(location.hash.slice(1));requestAnimationFrame(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}));}},[location.hash]);return <main><Hero/><Categories onSelect={select}/><MenuSection category={category} onSelect={select} query={query} onQuery={search}/><BestSellers/><Deals/><Contact/></main>}
