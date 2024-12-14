<script setup lang="ts">
import LoginForm from '~/components/auth/loginForm.vue';
import ForgetPass from './ForgetPassword.vue';
const formName = ref<'login' | 'password'>('login');
</script>

<template>
  <div
    class="tw-bg-third tw-rounded-lg tw-w-full tw-max-w-[500px] tw-py-8 tw-px-10 tw-shadow-md"
  >
    <transition name="fade" mode="out-in">
      <LoginForm
        v-if="formName === 'login'"
        @reset-pass="formName = 'password'"
      />
      <ForgetPass v-else>
        <Icon
          class="tw-cursor-pointer hover:tw-text-secondary"
          name="material-symbols:chevron-left"
          size="25"
          @click="formName = 'login'"
        />
      </ForgetPass>
    </transition>
  </div>
</template>

<style scoped></style>
