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

export interface Category {}

export interface User {}
