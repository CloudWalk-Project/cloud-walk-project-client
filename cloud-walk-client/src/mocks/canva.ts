import styled, { css } from "styled-components";
import * as T from "../types/interfaces";
import TheDepths from "../assets/imgs/TheDepths.jpg";
import DemonGod from "../assets/imgs/DemonGod.jpg";
import LoneWolf from "../assets/imgs/LoneWolf.jpg";

export const mockedCanva: T.Canva[] = [
  {
    id: 1,
    name: "The Depths",
    price: 400,
    genre: "Comic",
    description: "A vision of the deep.",
    inStock: true,
    image: TheDepths,
    categoryName: "Wallpaper",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "LoneWolf",
    price: 500,
    genre: "Vibrant",
    description: "The last hope of humanity",
    inStock: true,
    image: LoneWolf,
    categoryName: "Quadro",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    name: "DemonGod",
    price: 600,
    genre: "Malevolent",
    description: "The worshipped god of all demons.",
    inStock: true,
    image: DemonGod,
    categoryName: "Banner",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    name: "Obey",
    price: 600,
    genre: "Malevolent",
    description: "The worshipped god of all demons.",
    inStock: true,
    image: DemonGod,
    categoryName: "Banner",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  
];
