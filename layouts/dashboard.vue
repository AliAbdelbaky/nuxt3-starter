<script setup lang="ts">


const headers = useRequestHeaders(['cookie']) as HeadersInit
const {data} = await useFetch('/api/token', {headers})
</script>

<template>
  <main class="tw-min-h-[70vh]">
    <slot/>
    {{data}}
  </main>
</template>

<style scoped>

</style>