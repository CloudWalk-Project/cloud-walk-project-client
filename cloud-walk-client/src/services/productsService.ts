import { api } from "./api";
import { Canva, createCanvaObj } from "../types/interfaces";

export const canvaService ={
    getAllArts: (page:number)=>api.get('canva',{
        params:{
            page,
        }
    })
    .then((response)=>response.data)
    .catch((error)=>error.response.data),
    createArt: (data:createCanvaObj)=>api.post('canva',data)
    .then((response)=>response)
    .catch((error)=>error)
}