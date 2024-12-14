import useNotificationHandler from '~/composables/core/useNotificationHandler';

export default function () {
  const formRef = ref(null);
  const loading = ref(false);
  const errorMsg = ref<string | null>(null);
  const formValues = ref({
    email: null,
    password: null,
  });
  const { signIn } = useAuth();
  const { notify, getErrorMsg } = useNotificationHandler();

  const submit = async () => {
    const decodedUrl = new URL(window.location.href).searchParams.get(
      'redirect',
    );
    const callbackUrl = decodedUrl
      ? decodeURIComponent(decodedUrl)
      : '/dashboard';
    // @ts-ignore
    const errors = await formRef?.value.validate();

    if (errors.warnings) return;

    loading.value = true;
    errorMsg.value = null;
    try {
      return await signIn(
        'credentials',
        { ...formValues.value, callbackUrl },
        { redirect: callbackUrl },
      );
    } catch (e) {
      errorMsg.value = getErrorMsg(e);
    } finally {
      loading.value = false;
    }
  };

  return {
    formRef,
    loading,
    errorMsg,
    formValues,
    submit,
  };
}
