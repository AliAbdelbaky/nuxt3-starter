import useUserHandler from "~/composables/auth/useUserHandler";
import useNotificationHandler from "~/composables/core/useNotificationHandler";

type Lang = 'ar' | 'en'
const valid_url = (endpoint: string, BASE_URL: string) => {
    if (endpoint.startsWith('http') || endpoint.startsWith('https')) {
        return endpoint
    }
    if (endpoint.startsWith('/') && BASE_URL.endsWith('/')) {
        return BASE_URL + endpoint.slice(1)
    }
    return BASE_URL + endpoint
}

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

export default defineNuxtPlugin((nuxtApp) => {
    const {logout} = useUserHandler()
    const {notify} = useNotificationHandler('top-left')
    const BASE_URL = nuxtApp.$config.public.BASE_URL || 'your base url here'
    const DEVICE_TYPE = nuxtApp.$config.public.API_SECRET + ''
    const LANG_COOKIE = useCookie<Lang>("lang");
    const AUTH_COOKIE = useCookie<string>("userToken");
    console.log({BASE_URL, AUTH_COOKIE: AUTH_COOKIE.value})

    const DEFAULT_HEADERS: HeadersInit = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Credentials": "true",
        "Accept-Language": LANG_COOKIE.value || 'en',
        "Device-Type": DEVICE_TYPE,
        "Authorization": AUTH_COOKIE.value && `Bearer ${AUTH_COOKIE.value}`
    }
    const handleErrors = async (error: ApiError) => {
        console.log(error.statusCode);
        if (error.statusCode === 401) {
            notify('error', `${error.message}, Session expired`)
            await logout()
        }
    }

    async function api_provider<TType>(endpoint: string, options?: RequestInit | null,queries?:Record<any,any>): Promise<TType> {

        if (process.env.NODE_ENV === 'development') {
            console.log(`%cMaking request to: ${endpoint}`, "color:white;background-color:#333;padding:5px 10px;border-radius:6px;margin:20px 0px");
        }
        let url = valid_url(endpoint, BASE_URL);

        const transformed_options: RequestInit = {
            ...options,
            headers: {
                ...DEFAULT_HEADERS,
                ...options?.headers
            }
        }
        if(queries){
            const urlParams = new URLSearchParams(queries)
            url = `${url}?${urlParams}`
        }

        const response = await fetch(url, transformed_options);
        // console.log({response})
        if (!response.ok) {
            const error = new ApiError(response)
            await handleErrors(error)
            throw new Error(error.message)
        }
        notify('success', `Request successful ${endpoint}`)
        return response.json();
    }


    return {
        provide: {
            api_provider
        }
    }
})