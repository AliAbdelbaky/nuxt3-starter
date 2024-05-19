import useNotificationHandler from "~/composables/core/useNotificationHandler";

export default defineNuxtPlugin(_ => {
    const {notify} = useNotificationHandler('top')
    const handleOnline = () => {
        notify({
            title: 'Your Internet Connection was restored 🎉',
        })
    };

    const handleOffline = () => {
        notify({
            title: `You are Currently offline try to check your modem and router ⚠️`,
        })
    };

    // Event listeners to handle changes in network status
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Check initial network status
    const isOnline = navigator.onLine;

    if (!isOnline) {
        console.warn('Connection is currently offline.');
    }

    return {
        provide: {
            isOnline
        },
    };
})