<template>
  <n-form ref="formRef" :model="model" :rules="rules" class="container">
    <n-h3>Sign up</n-h3>
    <n-form-item path="firstName" label="First name">
      <n-input
        type="text"
        placeholder=""
        v-model:value="model.firstName"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item path="lastName" label="Last name">
      <n-input
        type="text"
        placeholder=""
        v-model:value="model.lastName"
        @keydown.enter.prevent
      />
    </n-form-item>
    <n-form-item path="email" label="Email">
      <n-input type="text" placeholder="" v-model:value="model.email" />
    </n-form-item>
    <n-form-item path="phone" label="Phone">
      <n-input type="number" placeholder="" v-model:value="model.phone" />
    </n-form-item>
    <n-form-item path="password" label="Password">
      <n-input type="password" placeholder="" v-model:value="model.password" />
    </n-form-item>
    <n-form-item path="reenteredPassword" label="Re-enter password">
      <n-input
        ref="rPasswordFormItemRef"
        first
        type="password"
        placeholder=""
        v-model:value="model.reenteredPassword"
      />
    </n-form-item>
    <n-button type="primary" @click="handleClick"> Send form </n-button>
  </n-form>
  <pre>
    {{ JSON.stringify(model, null, 2) }}
  </pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SHA256, enc } from 'crypto-js';
import {
  NInput,
  NH3,
  NForm,
  NFormItem,
  FormInst,
  FormItemInst,
  FormRules,
  FormItemRule,
  NButton,
} from 'naive-ui';
import { SignUpModelType } from '../types';
import { validatePhone } from '../helpers';
import { useStore } from '../store';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NH3,
    NInput,
  },
  setup() {
    const formRef = ref<FormInst | null>(null);
    const store = useStore();
    const router = useRouter();
    const rPasswordFormItemRef = ref<FormItemInst | null>(null);

    const model = ref<SignUpModelType>({
      firstName: null,
      lastName: null,
      email: null,
      phone: null,
      password: '',
      reenteredPassword: '',
    });

    const validatePasswordSame = (rule: FormItemRule, value: string): boolean =>
      value === model.value.password;

    const rules: FormRules = {
      firstName: [
        {
          required: true,
          message: 'Field is required',
          trigger: 'blur',
        },
      ],
      lastName: [
        {
          required: true,
          message: 'Field is required',
          trigger: 'blur',
        },
      ],
      email: [
        {
          required: true,
          message: 'Field is required',
          trigger: 'blur',
        },
      ],
      phone: [
        {
          required: true,
          message: 'Field is required',
          trigger: 'blur',
        },
        {
          validator: validatePhone,
          message: 'Phone number must have only 9 digits!',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Field is required',
          trigger: 'blur',
        },
      ],
      reenteredPassword: [
        {
          required: true,
          message: 'Field is required',
          trigger: ['input', 'blur'],
        },
        {
          validator: validatePasswordSame,
          message: 'Password is not same as re-entered password!',
          trigger: ['blur', 'password-input'],
        },
      ],
    };

    const handleClick = (e: MouseEvent): void => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (errors) {
          return;
        }
      });

      const hashedPassword = SHA256(model.value.password);
      const hashedRePassword = SHA256(model.value.reenteredPassword);

      const payload: SignUpModelType = {
        firstName: model.value.firstName,
        lastName: model.value.lastName,
        email: model.value.email,
        phone: model.value.phone,
        password: hashedPassword.toString(enc.Hex),
        reenteredPassword: hashedRePassword.toString(enc.Hex),
      };

      store.register(payload);
    };

    return {
      formRef,
      rPasswordFormItemRef,
      model,
      rules,
      handleClick,
    };
  },
});
</script>

<style scoped>
.container {
  border: 1px solid rgb(228, 228, 228);
  max-width: 500px;
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem auto;
}
</style>
