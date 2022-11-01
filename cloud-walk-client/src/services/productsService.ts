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
    page: number,
    search?: string,
    categoryName?: string,
    genre?: string,
  ) =>
    api
      .get('search', {
        params: {
            search,
            categoryName,
            genre,
            page,
            take: 20,
        },
      })
      .then((response) => response)
      .catch((error) => error),
};
