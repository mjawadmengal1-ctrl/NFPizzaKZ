import { z } from 'zod';
export const checkoutSchema=z.object({name:z.string().trim().min(2,'Please enter your full name.').max(80,'Name must be under 80 characters.'),address:z.string().trim().min(10,'Please enter a complete delivery address.').max(400,'Address must be under 400 characters.')});
export type CheckoutValues=z.infer<typeof checkoutSchema>;
export type EditorKind='products'|'categories'|'deals'|'slides';
const imageValid=(s:string)=>/^https?:\/\//.test(s)||/^data:image\/(png|jpeg|webp|gif);base64,/.test(s);
const linkValid=(s:string)=>s.startsWith('#')||(/^\/(?!\/)/.test(s))||/^https?:\/\//.test(s);
export const editorSchema=(kind:EditorKind)=>z.object({name:z.string().trim(),description:z.string().trim(),category:z.string(),price:z.string(),small:z.string(),medium:z.string(),large:z.string(),image:z.string().refine(imageValid,'Use an https image URL or upload an image.'),label:z.string().trim(),heading:z.string().trim(),text:z.string().trim(),button:z.string().trim(),link:z.string().trim(),includes:z.string().trim(),badge:z.string().trim(),active:z.boolean(),bestSeller:z.boolean()}).superRefine((v,ctx)=>{
 const error=(path:string,message:string)=>ctx.addIssue({code:z.ZodIssueCode.custom,path:[path],message});
 if(kind==='slides'){if(!v.heading)error('heading','A heading is required.');if(!v.button)error('button','Button text is required.');if(!linkValid(v.link))error('link','Use a section anchor, site path or https URL.');}
 else if(!v.name)error('name','A name is required.');
 if(kind==='products'){if(!v.category)error('category','Choose a category.');if(v.category==='pizza'){(['small','medium','large'] as const).forEach(k=>{if(!v[k]||!Number.isFinite(Number(v[k]))||Number(v[k])<=0)error(k,'Enter a price greater than zero.');});}}
 if(kind==='deals'||kind==='products'&&v.category!=='pizza'){if(!v.price||!Number.isFinite(Number(v.price))||Number(v.price)<=0)error('price','Enter a price greater than zero.');}
 if(kind==='deals'&&!v.includes)error('includes','Enter the items included in this deal.');
});
export type EditorValues=z.infer<ReturnType<typeof editorSchema>>;
