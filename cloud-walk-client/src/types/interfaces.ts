export interface Canva {
  id: number;
  name: string;
  price: number;
  genre: string;
  description: string;
  inStock: boolean;
  image: string;
  createdAt: Date;
  updatedAt: Date;
  categoryName: string;
}

export interface Category {}

export interface User {}
