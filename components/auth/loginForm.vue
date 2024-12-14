<script lang="ts" setup>
import {
  type FormItemRule,
  type FormRules,
  NAlert,
  NButton,
  NDivider,
  NForm,
  NFormItem,
  NInput,
} from 'naive-ui';
import useLoginHandler from '~/composables/auth/loginHandler';

defineEmits(['resetPass']);

const { formRef, formValues, submit, loading, errorMsg } = useLoginHandler();

const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          return new Error('Email is required');
        }
        if (!emailRegex.test(value)) {
          return new Error('please input valid email');
        }
        if (value.length > 120) {
          return new Error('Email should be less than 120 character');
        }
        return true;
      },
      trigger: ['input', 'blur'],
    },
  ],
  password: [
    {
      required: true,
      message: 'Password is required',
      trigger: ['input', 'blur'],
    },
    {
      min: 8,
      message: 'Password must be at least 8 character',
      trigger: ['input', 'blur'],
    },
  ],
};
const route = useRoute();
const isError = computed(() => route.query.error);
</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-4 tw-max-w-[500px] tw-w-full">
    <h1 class="title tw-text-center">Welcome back</h1>
    <n-button type="info">
      <template #icon>
        <Icon name="devicon:linkedin" size="30" />
      </template>
      Continue with Linkedin
    </n-button>
    <n-divider class="!tw-my-0" />
    <h2 class="subtitle">or, sign-in with your email.</h2>
    <n-form ref="formRef" :model="formValues" :rules="rules" :size="'medium'">
      <n-form-item :show-label="false" path="email">
        <n-input
          v-model:value.trim="formValues.email"
          clearable
          placeholder="Email"
          type="text"
        >
          <template #prefix>
            <Icon
              color="var(--secondary)"
              name="heroicons:envelope-solid"
              size="20"
            />
          </template>
        </n-input>
      </n-form-item>
      <n-form-item :show-label="false" path="password">
        <n-input
          v-model:value.trim="formValues.password"
          placeholder="Password"
          show-password-on="click"
          type="password"
        >
          <template #prefix>
            <Icon
              color="var(--secondary)"
              name="solar:lock-keyhole-outline"
              size="20"
            />
          </template>
        </n-input>
      </n-form-item>
      <h6
        class="subtitle tw-text-end hover:tw-underline tw-cursor-pointer"
        @click="$emit('resetPass')"
      >
        Forgot password?
      </h6>
    </n-form>
    <n-alert
      v-if="errorMsg"
      :show-icon="false"
      :title="errorMsg"
      closable
      type="error"
    />
    <n-button :loading="loading" type="primary" @click="submit">
      Submit
    </n-button>
    <h6 class="tw-text-secondary tw-text-sm tw-text-center">
      don't have an account?
      <span
        class="tw-text-primary tw-font-semibold tw-underline tw-cursor-pointer"
        >click here</span
      >
    </h6>
    <n-alert v-if="isError" type="error" :bordered="true">
      your email or password is incorrect
    </n-alert>
  </div>
</template>

<style lang="scss" scoped></style>
