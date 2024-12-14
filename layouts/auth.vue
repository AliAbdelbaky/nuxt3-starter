<script setup lang="ts">
import { useImage } from '@vueuse/core';
import { ref } from 'vue';

const imageOptions = ref({ src: 'https://place-hold.it/300x90' });
const colors = ['fff', '000', '5f0caa'];
const { isLoading, error } = useImage(imageOptions, { delay: 1000 });
</script>

<template>
  <main
    class="tw-min-h-screen login-container tw-flex tw-items-center tw-justify-center"
  >
    <div
      class="tw-absolute tw-top-10 tw-left-[50%]"
      style="transform: translateX(-50%)"
    >
      <div
        v-if="isLoading"
        class="tw-w-[300px] tw-h-[90px] tw-animate-pulse tw-bg-gray-500/5 tw-p-2"
      >
        Loading...
      </div>
      <div v-else-if="error" class="text-red">Failed</div>
      <img
        v-else
        :src="imageOptions.src"
        class="tw-w-[300px] tw-h-[90px] tw-object-cover"
        alt="vue use plugin"
      />
    </div>
    <slot />
  </main>
</template>

<style scoped>
.login-container {
  background-image: url('~/assets/imgs/dots-pattern.svg');
  background-repeat: repeat;
  background-size: 200px 200px;
}
</style>
