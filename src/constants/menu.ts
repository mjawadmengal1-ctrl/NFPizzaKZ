import type { RestaurantData, Product } from '@/types/restaurant';
export const PHOTOS = {
 pizza: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85',
 burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85',
 wrap: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85',
 fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85',
 gyro: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=85',
 special: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=800&q=85',
 veggie: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=85'
};
const fastFood: Product[] = [
 {id:'zinger',name:'Zinger Burger',category:'burgers',price:300,image:PHOTOS.burger,description:'A crispy chicken crunch in every bite.',badge:'Popular',bestSeller:true,active:true},
 {id:'gyro',name:'Chicken Gyro',category:'gyros',price:250,image:PHOTOS.gyro,description:'Tender chicken, wrapped with big flavour.',active:true},
 {id:'masala',name:'Masala Fries',category:'fries',price:200,image:PHOTOS.fries,description:'Golden fries with a desi masala kick.',bestSeller:true,active:true},
 {id:'double',name:'Double Decker',category:'burgers',price:550,image:PHOTOS.burger,description:'Double the layers. Double the satisfaction.',bestSeller:true,active:true},
 {id:'wrap',name:'Crispy Wrap',category:'wraps',price:250,image:PHOTOS.wrap,description:'Crispy chicken goodness, all wrapped up.',bestSeller:true,active:true},
 {id:'topping',name:'Topping Fries',category:'fries',price:300,image:PHOTOS.fries,description:'Your favourite fries, loaded with flavour.',active:true}
];
const pizzaNames = ['Tikka','Fajita','BBQ Spicy','Malai Boti','NF Special','Balochi Feast','Paneer Lover','Veggie Lover'];
const pizzas: Product[] = pizzaNames.map((name,i)=>({id:`pizza-${i}`,name,category:'pizza',description:['The classic desi chicken favourite.','Chicken, peppers and a flavourful finish.','A smoky, spicy pizza for bold cravings.','Creamy malai chicken on a cheesy base.','Our signature pizza. Made for your cravings.','Big Balochi-inspired flavour in every slice.','A cheesy treat for paneer lovers.','Fresh vegetables, golden cheese, pure joy.'][i],image:i===7?PHOTOS.veggie:i===4?PHOTOS.special:PHOTOS.pizza,price:i>=3&&i<=6?400:350,prices:i>=3&&i<=6?{Small:400,Medium:700,Large:1100}:{Small:350,Medium:600,Large:1000},badge:i===4?'NF Favourite':i===3?'Best Seller':undefined,bestSeller:i===3||i===4,active:true}));
export const INITIAL_DATA: RestaurantData = {
 products:[...fastFood,...pizzas],
 categories:[{id:'pizza',name:'Pizza',image:PHOTOS.pizza},{id:'burgers',name:'Burgers',image:PHOTOS.burger},{id:'wraps',name:'Wraps',image:PHOTOS.wrap},{id:'gyros',name:'Gyros',image:PHOTOS.gyro},{id:'fries',name:'Fries',image:PHOTOS.fries},{id:'deals',name:'Special Deals',image:PHOTOS.special}],
 deals:[
 {id:'deal-1',name:'Party Deal',includes:'3 Large Pizzas',price:2500,image:PHOTOS.pizza,active:true},
 {id:'deal-2',name:'Family Deal',includes:'1 Large Pizza + 5 Zinger Burgers',price:2000,image:PHOTOS.burger,active:true},
 {id:'deal-3',name:'Friends Deal',includes:'2 Small Pizzas + 3 Zinger Burgers + 1.5 Litre Drink',price:1500,image:PHOTOS.special,active:true},
 {id:'deal-4',name:'5 Star Deal',includes:'5 Zinger Burgers',price:1300,image:PHOTOS.burger,active:true},
 {id:'deal-5',name:'Khuzdar Deal',includes:'2 Crispy Wraps + 3 Chicken Gyros',price:1000,image:PHOTOS.wrap,active:true},
 {id:'deal-6',name:'Pizza Deal',includes:'3 Medium Pizzas',price:1500,image:PHOTOS.pizza,active:true},
 {id:'deal-7',name:'Pizza Deal',includes:'5 Small Pizzas',price:1500,image:PHOTOS.veggie,active:true},
 {id:'deal-8',name:'Dhamakedar Deal',includes:'2 Large Pizzas',price:1600,image:PHOTOS.pizza,active:true},
 {id:'deal-9',name:'Zinger Deal',includes:'3 Zinger Burgers + 1.5 Litre Drink',price:1000,image:PHOTOS.burger,active:true}],
 slides:[{id:'slide-1',label:'BIG FLAVOURS. BIGGER DEALS.',heading:'DHAMAKEDAR\nOFFER!',text:'2 LARGE PIZZAS ONLY RS. 1600',button:'Order This Deal',link:'#deal-8',image:PHOTOS.pizza,active:true},{id:'slide-2',label:'A FEAST FOR THE WHOLE FAMILY',heading:'GOOD FOOD.\nGREAT COMPANY.',text:'1 LARGE PIZZA + 5 ZINGER BURGERS · RS. 2000',button:'Explore Family Deal',link:'#deal-2',image:PHOTOS.burger,active:true}],autoplay:true,orders:[]
};
export const money = (value:number) => `Rs. ${value.toLocaleString('en-PK')}`;
export const WHATSAPP = '923327792999';
