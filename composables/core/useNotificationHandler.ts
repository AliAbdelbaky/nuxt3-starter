import useNThemeHandler from "~/composables/core/useNThemeHandler";
import {
    createDiscreteApi,
    type NotificationType,
    type NotificationPlacement

} from "naive-ui";

export default function (placement?: NotificationPlacement) {
    const {theme_overrides} = useNThemeHandler()
    const {notification} = createDiscreteApi(
        ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
        {
            configProviderProps: {themeOverrides: theme_overrides},
            notificationProviderProps: {placement: placement || 'top-right'}
        }
    )
    const notify = (type: NotificationType, message: string) => {
        notification[type]({
            title: message,
            content: message
        })
    }
    const getErrorMsg = (error: any) => {
        return error?.response?.data?.message || error?.message || 'An error occurred'
    }
    return {
        notify,
        getErrorMsg
    }
}