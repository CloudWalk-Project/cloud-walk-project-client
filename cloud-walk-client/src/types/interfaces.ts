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

export interface createCanvaObj {
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
  createdAt?: Date;
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

export interface Category {}

export interface User {}
