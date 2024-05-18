<script setup lang="ts">
import {useUserStore} from '~/stores/user'

const userStore = useUserStore()
const headers = useRequestHeaders(['cookie']) as HeadersInit
await useFetch('/api/token', {headers}).then((res) => {
  const token = res.data.value?.sub
  userStore.tokenCookie = token
  console.log({token})
  if (import.meta.client) {
    userStore.setAuth()
  }

})
</script>

<template>
  <main class="tw-min-h-screen">
    <slot/>
<!--    {{ data }}-->
  </main>
</template>

<style scoped>

</style>