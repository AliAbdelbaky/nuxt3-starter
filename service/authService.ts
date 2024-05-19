
export const login = async (payload: any) => {
     const {$api_provider} = useNuxtApp()
    const response = await $api_provider('auth/recruiter/login', {
        method: 'post',
        body: payload
    });
    return response.data.data;
};

export const fetchUser = async () => {
     const {$api_provider} = useNuxtApp()
    const response = await $api_provider('users/profile');
    return response.data;
};