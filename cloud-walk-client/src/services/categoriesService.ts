import { api } from "./api";

export const categoriesService = {
   getAllCategories: ()=>api.get('category',{
      params:{
         page:1
      }
   }),
   getOneCategory: (name:string)=>api.get(`category/${name}`)
   .then((response)=>response)
   .catch((error)=>error),  
}