
export default defineNuxtRouteMiddleware(async (to, from) => {
    const {status} = useAuth()
    const loggedIn = status.value === 'authenticated'
    if (process.env.NODE_ENV === 'development' && import.meta.client) {
        console.log({
            to,
            from,
            loggedIn,
            layout: to.meta.layout || 'default'
        })
    }

    const layout = to.meta.layout || 'default'

    // user is authenticated and route referee to aut
    if (loggedIn && layout === 'auth') {
        return navigateTo('/dashboard')
    }
    if (!loggedIn && layout === 'dashboard') {
        return navigateTo({path: '/login'})
    }
    return true
})