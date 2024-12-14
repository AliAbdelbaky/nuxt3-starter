import { defineStore } from 'pinia';
import useNotificationHandler from '~/composables/core/useNotificationHandler';
import { fetchUser } from '~/service/authService';

export const useUserStore = defineStore('userStore', () => {
  const tokenCookie = useCookie('userToken');
  const user = ref<null | any>(null);

  const { notify, getErrorMsg } = useNotificationHandler('bottom');
  const { signOut } = useAuth();

  const setAuth = async () => {
    try {
      user.value = await fetchUser();
      notify(
        'info',
        `Welcome back to the platform ${user.value?.first_name} ${user.value?.last_name} ❤️`,
      );

      console.log('user', user.value);
    } catch (e: any) {
      console.log(e);
      notify('error', getErrorMsg(e));
      await logout(true);
    }
  };
  const logout = async (storeLink: boolean = false) => {
    const baseURL = window.location.origin;
    const callbackUrl =
      baseURL +
      '/login' +
      '?redirect=' +
      encodeURIComponent(window.location.href);
    user.value = null;
    tokenCookie.value = null;
    if (storeLink) {
      await signOut({ callbackUrl });
      return;
    }
    await signOut();
  };
  return {
    tokenCookie,
    user,
    setAuth,
    logout,
  };
});
