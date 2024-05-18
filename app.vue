<script setup>
import {NButton} from 'naive-ui'
const { locale,setLocale } = useI18n()
</script>
<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center">
    <!--    <NuxtWelcome />-->
    <h2 class="tw-underline">Hello from Tailwind</h2>
    <p class="tw-text-red-500">{{ $t('welcome') }}</p>
    <n-button @click="setLocale('en')">English</n-button>
    <n-button @click="setLocale('ar')">Arabic</n-button>
  </div>
</template>
