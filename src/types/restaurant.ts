export type PizzaSize = 'Small' | 'Medium' | 'Large';
export interface Product { id: string; name: string; category: string; description: string; image: string; price: number; prices?: Record<PizzaSize, number>; badge?: string; bestSeller?: boolean; active: boolean }
export interface Category { id: string; name: string; image: string }
export interface Deal { id: string; name: string; includes: string; price: number; image: string; active: boolean }
export interface Slide { id: string; label: string; heading: string; text: string; button: string; link: string; image: string; active: boolean }
export interface CartItem { key: string; id: string; name: string; image: string; price: number; quantity: number; size?: PizzaSize }
export interface Order { id: string; customer: string; address: string; items: CartItem[]; total: number; date: string; status: string }
export interface RestaurantData { products: Product[]; categories: Category[]; deals: Deal[]; slides: Slide[]; autoplay: boolean; orders: Order[] }
