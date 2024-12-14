import useNotificationHandler from '~/composables/core/useNotificationHandler';
import { fetchUser } from '~/services/authService';
import { ref } from 'vue';

const user = ref<null | any>(null);
const commonData = ref<any>(null);

export default function () {
  const { notify, getErrorMsg } = useNotificationHandler('bottom');
  const tokenCookie = useCookie('userToken');
  const { signOut } = useAuth();

  const setAuth = async () => {
    try {
      user.value = await fetchUser();
      notify({
        type: 'default',
        title: `Welcome back to the platform ${user.value?.first_name} ${user.value?.last_name} ❤️`,
        description: 'You are now logged in',
      });
      // notify('info', `Welcome back to the platform ${user.value?.first_name} ${user.value?.last_name} ❤️`)

      console.log('user', user.value);
    } catch (e: any) {
      console.log(e);
      notify({
        type: 'error',
        title: getErrorMsg(e),
        description: 'An error occurred while fetching user data',
      });
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
    commonData,
    setAuth,
    logout,
  };
}
