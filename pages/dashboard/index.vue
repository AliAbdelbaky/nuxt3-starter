<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
const {signOut} = useAuth()
const logout = () => {
  const baseURL = window.location.origin
  signOut({callbackUrl: baseURL + '/login'})
}
</script>

<template>
  <h2 @click="logout">
    Dashboard
  </h2>
</template>

<style scoped>

</style>