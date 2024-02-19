import axios from "axios"

/**
 * Creates an instance of Axios with the specified base URL and headers.
 * @returns {AxiosInstance} The Axios instance.
 */
export default axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "x-api-key": import.meta.env.VITE_API_KEY
    }
})