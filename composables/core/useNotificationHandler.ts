import useNThemeHandler from "~/composables/core/useNThemeHandler";
import {
    createDiscreteApi,
    type NotificationOptions,
    type NotificationPlacement,
    type NotificationApi

} from "naive-ui";

export default function (placement?: NotificationPlacement) {
    const {theme_overrides} = useNThemeHandler()
    const notification = ref<NotificationApi | null>(null)

    const notify = (payload: NotificationOptions) => {
        notification.value?.create({
            ...payload,
            duration: 2500,
            keepAliveOnHover: true
        })
    }
    const getErrorMsg = (error: any) => {
        return error?.response?.data?.message || error?.message || 'An error occurred'
    }
    onMounted(() => {
        if (notification.value) return
        const _createDiscreteApi = createDiscreteApi(
            ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
            {
                configProviderProps: {themeOverrides: theme_overrides},
                notificationProviderProps: {placement: placement || 'top-right'}
            }
        )
        notification.value = _createDiscreteApi.notification
    })
    return {
        notify,
        getErrorMsg
    }
}