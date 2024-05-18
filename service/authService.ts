import useRequestHandler from "~/composables/core/useRequestHandler";


export const login = async (payload: any) => {
    const response = await useRequestHandler().fireRequest('auth/recruiter/login', {
        method: 'post',
        body: payload
    });
    return response.data.data;
};

export const fetchUser = async () => {
    const response = await useRequestHandler().fireRequest('users/profile');
    return response.data;
};