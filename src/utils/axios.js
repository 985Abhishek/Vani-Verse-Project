import axios from "./axios";

//
import { BASE_URL } from "../config";
// BASE
const axiosInstance = axios.create({baseURL : BASE_URL});
axios.interceptors.response.use(
    (response)=> response,
    (error)=>
        Promise.reject((
            error.reponse && error.response.data) || "Something wnet wrong"
        )
);

export default  axiosInstance;