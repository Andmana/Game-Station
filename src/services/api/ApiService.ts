import axios from "axios";

const BASE_URL = "https://api.rawg.io/api";
const API_KEY = import.meta.env.VITE_API_KEY;

const generateQueryString = (params?: Record<string, unknown>): string => {
    if (!params || Object.keys(params).length === 0) {
        return "";
    }

    // Convert parameters into query string format
    return new URLSearchParams(params as Record<string, string>).toString();
};

export const fetchData = async <T>(
    endpoint: string,
    queryParams?: Record<string, unknown>
): Promise<T> => {
    // Build the full URL for the request
    const queryString = generateQueryString(queryParams);
    const requestUrl = `${BASE_URL}${endpoint}?${queryString}&key=${API_KEY}`;

    const response = await axios.get(requestUrl);
    return response.data;
};
