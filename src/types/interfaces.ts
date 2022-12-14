export interface Canva {
  id: number;
  name: string;
  price: number;
  genre: string;
  description: string;
  inStock: boolean;
  image: string;
  createdAt?: Date;
  updatedAt?: Date;
  categoryName: string;
}

export interface createUpdateCanvaObj {
  name: string;
  price: number;
  genre: string;
  description: string;
  inStock: boolean;
  image: string;
  categoryName: string;
}

export interface categoriesObj {
  cost: number;
  createdAt?: string;
  description: string;
  id: number;
  name: string;
  price: number;
  updatedAt?: string;
}

export interface loginObj {
  email: string;
  password: string;
}

export interface metaObj {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  orderByColumn: string;
  page: number;
  pageCount: number;
  take: number;
}

export interface Category {
  cost: number;
  createdAt?: string;
  description: string;
  id?: number;
  name: string;
  price: number;
  updatedAt?: string;
}

export interface User {
  id: number;
  name: string;
  image: string;
  email: string;
  recoverPasswordToken: null;
  role: string;
}

export interface createUpdateUser {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface createUpdateUser {
  name: string;
  email: string;
  image: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface Update {
  id: number;
  oldPrice: number;
  newPrice: number;
  userId: number;
  canvaId: number;
  createdAt?: Date;
  user: string;
  canva: string;
  atStatus: string;
  statusMessage: string;
}

export interface reportObj {
  canva_id: number;
  canva_name: string;
  created_at: string;
  id: number;
  new_price: number;
  old_price: number;
  status_message: string;
  user_name: string;
}
