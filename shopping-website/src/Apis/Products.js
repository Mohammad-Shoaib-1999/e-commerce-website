import axios from "axios";




import { BASE_URL, ENDPOINTS } from "../Constant";

export const fetchAllProducts = () => {
  return axios.get(`${BASE_URL}/${ENDPOINTS.allProducts}`);
};


