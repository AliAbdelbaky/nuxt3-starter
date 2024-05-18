<script lang="ts" setup>
import {type FormItemRule, type FormRules, NButton, NDivider, NForm, NFormItem, NInput} from "naive-ui";

const formValues = ref({
  email: null,
})
const rules: FormRules = {
  email: [
    {
      required: true,
      validator(rule: FormItemRule, value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          return new Error('Email is required')
        }
        if (!emailRegex.test(value)) {
          return new Error('please input valid email')
        }
        if (value.length > 120) {
          return new Error('Email should be less than 120 character')
        }
        return true
      },
      trigger: ['input', 'blur']
    }
  ],
}
const loading = ref(false)

</script>

<template>
  <div class="tw-flex tw-flex-col tw-gap-4 tw-max-w-[500px] tw-w-full">
    <div class="tw-flex tw-gap-1 tw-items-center tw-justify-start">
      <slot/>
      <h1 class="title">Reset Password</h1>
    </div>
    <h3 class="subtitle">Please write your email address</h3>
    <n-form ref="formRef" :model="formValues" :rules="rules" :size="'medium'">
      <n-form-item :show-label="false" path="email">
        <n-input
          v-model:value.trim="formValues.email"
          clearable
          placeholder="Email"
          type="text"
        >
          <template #prefix>
            <Icon color="var(--secondary)" name="heroicons:envelope-solid" size="20"/>
          </template>
        </n-input>
      </n-form-item>
    </n-form>
    <n-button :loading="loading" type="primary">
      Send reset code
    </n-button>
  </div>
</template>

<style lang="scss" scoped>

</style>