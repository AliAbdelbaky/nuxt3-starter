<script setup lang="ts">
import {
  arDZ,
  dateArDZ,
  dateEnUS,
  enUS,
  NConfigProvider,
  NThemeEditor,
} from "naive-ui";

import themeConfig, {_lightThemeVars} from './_theme.config'
import useI18nHandler from '~/composables/core/useI18nHandler'
import useNThemeHandler from "~/composables/core/useNThemeHandler";

const {set_lang, lang_cookie} = useI18nHandler()
const {theme_overrides} = useNThemeHandler()


set_lang(lang_cookie.value)


const is_dev_env = computed(() => process.env.NODE_ENV === 'development')



useHead({
  htmlAttrs: {
    style: themeConfig(_lightThemeVars),
  },
})
</script>
<template>
  <n-config-provider
      :date-locale="lang_cookie==='en' ?dateEnUS:dateArDZ"
      :locale="lang_cookie==='en'?enUS : arDZ"
      :theme-overrides="theme_overrides"
  >
    <client-only v-if="is_dev_env">
      <n-theme-editor/>
    </client-only>
    <nuxtLayout>
      <NuxtPage/>
    </nuxtLayout>
  </n-config-provider>
</template>