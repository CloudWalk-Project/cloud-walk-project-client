import { type } from "os";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { canvaService } from "../services/productsService";
import { Canva, metaObj } from "../types/interfaces";

interface searchObj {
  search?: string;
  genre?: string;
  categoryName?: string;
}

type searchContext = {
  searchValues: searchObj;
  searchResult: Canva[];
  metaData: metaObj;
  handleSubmit: Function;
  handleFilterChanges: Function;
  loading: boolean;
  clearResult: Function;
  nextPage: Function;
};

export const SearchContext = createContext<searchContext>({
  metaData: {
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 10,
    orderByColumn: "id",
    page: 1,
    pageCount: 0,
    take: 20,
  },
  searchValues: {},
  searchResult: [],
  handleSubmit: (searchValue: string) => {},
  handleFilterChanges: (genre?: string, category?: string) => {},
  loading: false,
  clearResult: ()=>{},
  nextPage: ()=>{}
});

export const SearchProvider = ({ children }: any) => {
  const [searchValues, setSearchValues] = useState<searchObj>({
    search: "",
    genre: undefined,
    categoryName: undefined,
  });
  const [searchResult, setSearchResult] = useState([]);
  const [metaData, setMetaData] = useState<metaObj>({
    hasNextPage: false,
    hasPreviousPage: false,
    itemCount: 10,
    orderByColumn: "id",
    page: 1,
    pageCount: 0,
    take: 20,
  });
  const [loading, setLoading] = useState(false);

  const handleFilterChanges = async (genre?: string, category?: string, ) => {
    searchValues.genre = genre;
    searchValues.categoryName = category;
    console.log(`cat: ${category} gen:${genre}`);
    const response = await canvaService.searchArt(
      1,
      searchValues.search,
      searchValues.categoryName,
      searchValues.genre
    );
    if (response.data) {
      setSearchResult(response.data.data);
      setMetaData(response.data.meta);
    } else {
      toast.error(response.response.data.message);
    }
    console.log(response);
  };

  const nextPage = async (page:number)=>{
    console.log(page)
    const response = await canvaService.searchArt(
        page,
        searchValues.search,
        searchValues.categoryName,
        searchValues.genre
      );
      if (response.data) {
        setSearchResult(response.data.data);
        setMetaData(response.data.meta);
      } else {
        toast.error(response.response.data.message);
      }
      console.log(response);
  }

  const clearResult = async ()=>{
    const response = await canvaService.searchArt(
        1,);
      if (response.data) {
        setSearchResult(response.data.data);
        setMetaData(response.data.meta);
      } else {
        toast.error(response.response.data.message);
      }
    setSearchValues({
        search: undefined,
        genre: undefined,
        categoryName: undefined
    })
  }

  const handleSubmit = async (searchValue: string) => {
    searchValues.search = searchValue;
    setSearchValues({
      ...searchValues,
      genre: undefined,
      categoryName: undefined,
    });

    const response = await canvaService.searchArt(
      1,
      searchValues.search,
      searchValues.categoryName,
      searchValues.genre
    );
    if (response.data) {
      setSearchResult(response.data.data);
      setMetaData(response.data.meta);
    } else {
      toast.error(response.response.data.message);
    }
    console.log(response);
  };

  return (
    <SearchContext.Provider
      value={{
        metaData,
        searchValues,
        searchResult,
        handleSubmit,
        handleFilterChanges,
        loading,
        clearResult,
        nextPage
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
