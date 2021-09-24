import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:8080",
});


/*api.interceptors.request.use((config) =>{
    // Do something before request is sent
    console.log("Requisição Enviada");
    return config;
}, (error) => {
    // Do something with request error
    return Promise.reject(error);
});*/

export default api;