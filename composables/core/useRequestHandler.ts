type Lang = 'ar' | 'en'

class ApiError extends Error {
    name: string;
    message: string;
    url: string;
    statusCode: number;

    constructor(response: Response) {
        super(response.statusText);
        this.name = response.statusText;
        this.message = response.statusText;
        this.url = response.url;
        this.statusCode = response.status;
    }

}

const valid_url = (endpoint: string, BASE_URL: string) => {
    if (endpoint.startsWith('http') || endpoint.startsWith('https')) {
        return endpoint
    }
    if (endpoint.startsWith('/') && BASE_URL.endsWith('/')) {
        return BASE_URL + endpoint.slice(1)
    }
    return BASE_URL + endpoint
}
export default function () {
    const RUNTIME_CONFIG = useRuntimeConfig();

    const BASE_URL = process.env.BASE_URL || 'your base url here'
    const LANG_COOKIE = useCookie<Lang>("lang");
    const AUTH_COOKIE = useCookie<string>("userToken");
    const DEFAULT_HEADERS: HeadersInit = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Credentials": "true",
        "Accept-Language": LANG_COOKIE.value || 'en',
        "Device-Type": RUNTIME_CONFIG.public.API_SECRET + '',
        "Authorization": AUTH_COOKIE.value && `Bearer ${AUTH_COOKIE.value}`
    }



    const handleErrors = (error: ApiError) => {
        console.log(error.statusCode);
    }

    const fireRequest = async (endpoint: string, options?: RequestInit) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(`%cMaking request to: ${endpoint}`, "color:white;background-color:#333;padding:5px 10px;border-radius:6px;margin:20px 0px");
        }
        const url = valid_url(endpoint, BASE_URL);

        const transformed_options: RequestInit = {
            ...options,
            headers: {
                ...DEFAULT_HEADERS,
                ...options?.headers
            }
        }

        const response = await fetch(url, transformed_options);
        console.log({response})
        if (!response.ok) {
            const error = new ApiError(response)
            handleErrors(error)
            throw new Error(error.message)
        }
        return response.json();
    }

    return {fireRequest};
}