import axios from "axios";


export const AxiosInstance = axios.create({
    baseURL: "https://api.freeapi.app/api/v1",
    headers: {
        "Content-Type": "application/json"
    }
})

// request interceptor to add access token
AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
            AxiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);