import { BASE_API_URL } from "../constants/baseUrl.ts";
import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse, InternalAxiosRequestConfig
} from "axios";
import Cookie from "../utilities/Cookie";
import Toastie from "../utilities/Toastie.ts";

// Configure request params
const config: AxiosRequestConfig = {
    baseURL: BASE_API_URL,
    timeout: 30000,
};
const service: AxiosInstance = axios.create(config);

// Intercept request
service.interceptors.request.use(
    (config:InternalAxiosRequestConfig) => {
        config.headers = config.headers ?? {};
        const accessToken = Cookie.getCookie('YOUR_TOKEN_CREDENTIALS' || '');

        // Check the access token
        if (accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
    },

    (error) => {
        Promise.reject(error).then(error =>console.log(error));
    }
);

// Intercept response
service.interceptors.response.use(
    (response: AxiosResponse) => {
        // if status code is 500 show error message
        if (response.status === 500) {
            const toast = new Toastie();
            toast.error("Internal server error");
            return;
        }
        return response.data;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

export default service;
