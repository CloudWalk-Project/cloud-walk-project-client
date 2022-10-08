import { api } from "./index";

export const categoriesService = {
  getAllCategories: () =>
    api.get("category", {
      params: {
        page: 1,
      },
    }),
};
