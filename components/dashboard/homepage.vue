<script setup lang="ts">
import useUserHandler from "~/composables/auth/useUserHandler";

const {logout} = useUserHandler()

import {NButton} from "naive-ui";
</script>

<template>
  <div class="tw-flex tw-items-center tw-justify-between tw-gap-2 tw-flex-wrap">
    <h2>
      Dashboard
    </h2>
    <n-button @click="logout()" type="error" tertiary>
      Logout
    </n-button>
  </div>
</template>

<style scoped>

</style>