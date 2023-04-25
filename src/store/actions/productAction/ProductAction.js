import { apiMethod } from "../../../services/services";

export const addProduct = (data, url) => {
  return (dispatch) => {
    return apiMethod("POST", data, url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const getAllProducts = (url) => {
  return (dispatch) => {
    return apiMethod("GET", {}, url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateProduct = (data, url) => {
  return (dispatch) => {
    return apiMethod("PUT", data, url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteProduct = (url) => {
  return (dispatch) => {
    return apiMethod("DELETE", {}, url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
