import { Link } from 'react-router-dom';
import { Pizza, ArrowLeft } from 'lucide-react';
export default function NotFound(){return <main className="container-shell flex min-h-[65vh] flex-col items-center justify-center py-16 text-center"><Pizza size={64} className="mb-6 text-primary"/><p className="eyebrow mb-3">404 · This slice is missing</p><h1 className="section-title">LET'S GET YOU <span className="text-primary">BACK TO THE GOOD STUFF.</span></h1><Link to="/" className="btn-primary mt-8"><ArrowLeft size={17}/>Back to NF PIZZA KZ</Link></main>}
