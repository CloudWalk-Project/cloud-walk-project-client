export interface Canva {
  id: number;
  name: string;
  price: number;
  genre: string;
  description: string;
  inStock: boolean;
  image: string;
  categoryName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {}

export interface User {
  id: number;
  name: string;
  image: string;
  password: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}
