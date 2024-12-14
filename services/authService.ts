import type { UserData } from '~/assets/_types/user.types';

type LoginResponse = {
  data: {
    data: UserData;
  };
};
type UserResponse = {
  data: UserData;
};
export const login = async (payload: any) => {
  const { $api_provider } = useNuxtApp();
  const response = await $api_provider<LoginResponse>('auth/recruiter/login', {
    method: 'post',
    body: payload,
  });
  return response.data.data;
};

export const fetchUser = async () => {
  const { $api_provider } = useNuxtApp();
  const response = await $api_provider<UserResponse>('users/profile');
  return response.data;
};
