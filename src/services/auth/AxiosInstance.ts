import axios from "axios";

let store: any;
export const injectStore = (_store: any) => {
    store = _store;
};


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
        const tokenRedux = store?.getState().auth.accessToken;
        console.log('redux token0', tokenRedux)
        if (token) {
            AxiosInstance.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// handle request token
AxiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error?.config
        // if 401 error and not already retried
        if (error?.response && error?.response?.status === 401 &&
            !originalRequest?._retry
        ) {
            originalRequest._retry = true;

            //attempt to refresh token
            try {

                //request new accesstoken
                const refreshToken = localStorage.getItem('refreshToken')
                const res = await axios.post("https://api.freeapi.app/api/v1/users/refresh-token", { refreshToken })
                const { accessToken } = res?.data

                // update local storage and Axios headers
                localStorage.setItem('accessToken', accessToken)
                originalRequest.headers["Authorization"] = `Bearer ${accessToken}`

                //sent the original request again
                return AxiosInstance(originalRequest)

            } catch (error) {
                window.location.href = "/login"

                //clear token on failure
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                localStorage.removeItem("userinfo");

                return Promise.reject(error)
            }
        }
        return Promise.reject(error);
    })