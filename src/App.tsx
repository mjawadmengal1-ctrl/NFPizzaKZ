import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Pizza } from 'lucide-react';
import { RestaurantProvider } from '@/stores/RestaurantContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/features/CartDrawer';
import ErrorBoundary from '@/components/features/ErrorBoundary';
import Storefront from '@/pages/Storefront';
import NotFound from '@/pages/NotFound';
const Admin=lazy(()=>import('@/pages/Admin'));
export default function App(){return <ErrorBoundary><BrowserRouter><RestaurantProvider><Header/><Suspense fallback={<div role="status" className="flex min-h-[60vh] flex-col items-center justify-center gap-4"><Pizza size={40} className="text-primary"/><p className="font-display text-2xl font-bold">GETTING YOUR NEXT BITE READY…</p></div>}><Routes><Route path="/" element={<Storefront/>}/><Route path="/admin" element={<Admin/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense><Footer/><CartDrawer/><Toaster position="bottom-center" richColors closeButton toastOptions={{style:{fontFamily:'DM Sans, sans-serif'}}}/></RestaurantProvider></BrowserRouter></ErrorBoundary>}
