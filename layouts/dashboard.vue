<script setup lang="ts">
import useUserHandler from "~/composables/auth/useUserHandler";

const {setAuth, tokenCookie,user} = useUserHandler()

const headers = useRequestHeaders(['cookie']) as HeadersInit
await useFetch('/api/token', {headers}).then((res) => {
  tokenCookie.value = res.data.value?.sub
  console.log(res.data.value)
  if (import.meta.client) {
    setAuth()
  }
})
</script>

<template>
  <main class="tw-min-h-screen">
    <slot/>
    {{ user}}
<!--    {{ data }}-->
  </main>
</template>

<style scoped>

</style>