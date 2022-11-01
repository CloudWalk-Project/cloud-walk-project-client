import { type } from "os";
import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { canvaService } from "../services/productsService";

interface searchObj {
  search?: string;
  genre?: string;
  categoryName?: string;
}

type searchContext = {
  searchValues: searchObj;
  setSearchValues: Function;
};

export const SearchContext = createContext({
  metaData: {},
  searchValues: {},
  searchResult: [{}],
  handleSubmit: (searchValue:string) => {},
  handleFilterChanges: (genre?:string,category?:string) => {},
  loading:false,
});

export const SearchProvider = ({ children }: any) => {
  const [searchValues, setSearchValues] = useState<searchObj>({
    search: "",
    genre: undefined,
    categoryName: undefined,
  });
  const [searchResult, setSearchResult] = useState([{}]);
  const [page, setPage] = useState(1);
  const [metaData, setMetaData] = useState({});
  const [loading,setLoading] = useState(false);

  const handleFilterChanges = async (genre?:string, category?:string) => {
    searchValues.genre = genre
    searchValues.categoryName = category

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
    console.log(response)
  };


  const handleSubmit = async (searchValue:string) => {
    searchValues.search = searchValue;
    setSearchValues({
        ...searchValues,
        genre:undefined,
        categoryName:undefined,
    })

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
    console.log(response)
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
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
