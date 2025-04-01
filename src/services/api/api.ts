import axios from "axios";

const API_BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY;

export const PostRequest = async <T>(endpoint: string, data: T): Promise<T> => {
    const requestUrl = `${API_BASE_URL}/${endpoint}?key=${API_KEY}`;
    const response = await axios.post(requestUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        data,
    });
    return response.data;
};

export const GetRequest = async <T>(endpoint: string): Promise<T> => {
    const requestUrl = `${API_BASE_URL}/${endpoint}?key=${API_KEY}`;
    const response = await axios.get(requestUrl);
    return response.data;
};
