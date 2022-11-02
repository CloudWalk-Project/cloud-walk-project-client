import { Category } from "../types/interfaces";
import { api } from "./api";

export const categoriesService = {
   getAllCategories: (page:number)=>api.get('category',{
      params:{
         page
      }
   })
   .then((response)=>response)
   .catch((error)=>error),
   getOneCategory: (name:string)=>api.get(`category/${name}`)
   .then((response)=>response)
   .catch((error)=>error),

   deleteCategory: (id:number) => api.delete(`category/${id}`)
   .then((response)=>response)
   .catch((error)=>error),  
   
   updateCategory: (id:number,data:Category)=> api.patch(`category/${id}`,data)
   .then((response)=>response)
   .catch((error)=>error),

   createCategory: (data:Category)=>api.post('category',data)
   .then((response)=>response)
   .catch((error)=>error)
}