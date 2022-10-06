import { api } from "./api";
import { Canva } from "../types/interfaces";

export const canvaService ={
    getAllArts: (page:number)=>api.get('canva',{
        params:{
            page,
        }
    })
    .then((response)=>response.data)
    .catch((error)=>error.response.data)
}