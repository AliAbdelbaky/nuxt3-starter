<script setup lang="ts">
import {useImage} from '@vueuse/core'
import {ref} from 'vue'
import {NButton} from 'naive-ui'
import themeConfig, {_lightThemeVars} from './_theme.config'
import useI18nHandler from '~/composables/core/useI18nHandler'

const {set_lang, lang_cookie, html_attrs} = useI18nHandler()
set_lang(lang_cookie.value)

const imageOptions = ref({src: 'https://place-hold.it/300x200'})
const colors = ['fff', '000', '5f0caa']
const {isLoading, error} = useImage(imageOptions, {delay: 1000})

function change() {
  imageOptions.value.src = ''
  const color: string = colors[Math.floor(Math.random() * colors.length)]
  imageOptions.value.src = `https://place-hold.it/300x200/${color}`
}

const classes = computed(() => themeConfig(_lightThemeVars))
useHead({
  htmlAttrs: {
    style: classes,
  },
})
</script>
<template>
  <div class="tw-min-h-screen tw-flex tw-flex-col tw-gap-4 tw-items-center tw-justify-center">
    <!--    <NuxtWelcome />-->
    <h2 class="tw-underline">Hello from Tailwind</h2>
    <p class="tw-text-red-500">{{ $t('welcome') }}</p>
    <n-button @click="set_lang( lang_cookie === 'en' ?'ar' :'en')">{{
        lang_cookie === 'en' ? 'Arabic' : ' English'
      }}
      {{ html_attrs }}
    </n-button>

    <span v-if="isLoading">Loading</span>
    <div v-if="isLoading" class="tw-w-[300px] tw-h-[200px] tw-animate-pulse tw-bg-gray-500/5 tw-p-2">
      Loading...
    </div>
    <div v-else-if="error" class="text-red">
      Failed
    </div>
    <img v-else :src="imageOptions.src" class="tw-w-[300px] tw-h-[200px]" alt="vue use plugin">

    <button @click="change">
      Change
    </button>

    <button @click="imageOptions.src = ''">
      Create Error
    </button>

    <Icon name="uil:github" color="black"/>
    <pre class="tw-max-h-[500px] tw-overflow-x-hidden">
      {{ classes }}
    </pre>
  </div>
</template>
