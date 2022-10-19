import { api } from "./api";

export const categoriesService = {
   getAllCategories: ()=>api.get('category',{
      params:{
         page:1
      }
   })
}