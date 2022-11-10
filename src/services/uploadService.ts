import { api } from "./api";

export const uploadService = {
  uploadImage: (data: any) =>
    api
      .post("upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response)
      .catch((error) => error.response),

  batchUpdateUpload: (data: any) =>
    api
      .patch("upload/batch_update", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => response)
      .catch((error) => error),

  getAllBacthes: () =>
    api
      .get("upload/status",{
      })
      .then((response) => response)
      .catch((error) => error),
};
