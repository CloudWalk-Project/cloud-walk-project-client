import { api } from "./api";
import { Canva, createUpdateCanvaObj } from "../types/interfaces";

export const canvaService = {
  getAllArts: (page: number) =>
    api
      .get("canva", {
        params: {
          page,
        },
      })
      .then((response) => response.data)
      .catch((error) => error.response.data),
   
      getArtById: (id:number) => api.get(`canva/${id}`)
      .then((response)=>response)
      .catch((error)=>error), 
      
  createArt: (data: createUpdateCanvaObj) =>
    api
      .post("canva", data)
      .then((response) => response)
      .catch((error) => error),

  updateArt: (data: createUpdateCanvaObj, id: number) =>
    api
      .put(`canva/${id}`, data)
      .then((response) => response)
      .catch((error) => error),

  deleteArt: (id: number) =>
    api
      .delete(`canva/${id}`)
      .then((response) => response)
      .catch((error) => error),

  searchArt: (
    name?: string,
    page?: number,
    categoryName?: string,
    genre?: string,
    id?: number
  ) =>
    api
      .get(`search`, {
        params: {
            name,
            categoryName,
            genre,
            id,
            page,
        },
      })
      .then((response) => response.data)
      .catch((error) => error.response.data),
};
