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

<<<<<<< HEAD
export interface createUpdateCanvaObj {
=======
export interface createCanvaObj {
>>>>>>> home
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
<<<<<<< HEAD
  createdAt?: string;
=======
  createdAt?: Date;
>>>>>>> home
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

<<<<<<< HEAD
export interface metaObj {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  itemCount: number;
  orderByColumn: string;
  page: number;
  pageCount: number;
  take: number;
}

=======
>>>>>>> home
export interface Category {}

export interface User {}
