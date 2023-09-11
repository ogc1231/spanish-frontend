import axios from "axios";

axios.defaults.baseURL = "https://spanish-e3266f9308e3.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;