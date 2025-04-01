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

export const GetRequest = async <T>(
    path: string,
    params?: Record<string, unknown>
): Promise<T> => {
    // Construct query string from params object
    let queryParams = "";
    if (params && Object.keys(params).length > 0) {
        queryParams = new URLSearchParams(
            params as Record<string, string>
        ).toString();
    }

    // Construct the request URL with API base, path, and API key
    const requestUrl = `${API_BASE_URL}/${path}?${queryParams}&key=${API_KEY}`;

    const response = await axios.get(requestUrl);
    return response.data;
};
