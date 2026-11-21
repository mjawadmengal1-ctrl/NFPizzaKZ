import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
interface Props{onClose:()=>void}
export default function SearchForm({onClose}:Props){const {register,handleSubmit}=useForm<{query:string}>();const navigate=useNavigate();return <form className="container-shell flex items-end gap-3 pb-5" onSubmit={handleSubmit(({query})=>{navigate(`/?search=${encodeURIComponent(query.trim())}#menu`);onClose();})}><div className="flex-1"><label htmlFor="header-search" className="field-label text-cream">What are you craving?</label><input autoFocus id="header-search" {...register('query')} placeholder="Search pizza, burgers, wraps…" className="field text-foreground"/></div><button className="btn-gold !px-4" type="submit" aria-label="Search"><Search size={20}/></button><button type="button" aria-label="Close search" className="icon-button" onClick={onClose}><X/></button></form>}
