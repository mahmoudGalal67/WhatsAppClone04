import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://whatsapptask-production.up.railway.app/api",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoic3RyaW5nIiwiZXhwIjoyMDg1MzQ3NTYyLCJpc3MiOiJXaGF0c0FwcFRhc2siLCJhdWQiOiJXaGF0c0FwcFRhc2tVc2VycyJ9.RI3RHRyazFSKQlglk-KfSS5ZHf23GPEDShPpXypOW7Y`,
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token"); // or accessToken

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized — maybe token expired");
            // Optional:
            // logout()
            // window.location.href = "/login"
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
