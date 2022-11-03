import { createUpdateUser } from "../types/interfaces";
import { api } from "./api";

export const userService = {
  getAllUsers: ()=> api.get('user')
  .then((response)=>response)
  .catch((error)=>error),
  deleteUser:(id:number)=>api.delete(`user/${id}`)
  .then((reponse)=>reponse)
  .catch((error)=>error),
  createUser:(data:createUpdateUser)=>api.post('admin/create-user',data)
  .then((response)=>response)
  .catch((error)=>error),
  updateRole: (id:any,data:any)=>api.patch(`update-role/${id}`,data)
  .then((response)=>response)
  .catch((error)=>error),
}