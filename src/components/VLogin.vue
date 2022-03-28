<template>
  <n-form :model="model" :rules="rules" class="container" ref="formRef">
    <n-h3>Login</n-h3>
    <n-form-item path="email" label="Email">
      <n-input type="text" placeholder="" v-model:value="model.email" />
    </n-form-item>
    <n-form-item path="password" label="Password">
      <n-input type="password" placeholder="" v-model:value="model.password" />
    </n-form-item>
    <n-button type="primary" @click="handleClick"> Login </n-button>
  </n-form>
  <pre>
    {{ JSON.stringify(model, null, 2) }}
  </pre>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  NInput,
  NH3,
  NForm,
  NFormItem,
  FormRules,
  NButton,
  FormInst,
} from 'naive-ui';
import { SHA256, enc } from 'crypto-js';
import { LoginModel } from '../types';
import { validateEmail } from '../helpers';
import { useAuth } from '../store/auth';

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
    const store = useAuth();

    const model = ref<LoginModel>({
      email: '',
      password: '',
    });

    const rules: FormRules = {
      email: [
        {
          required: true,
          validator: validateEmail,
          message: 'Invalid email address',
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
    };

    const handleClick = (e: MouseEvent): void => {
      e.preventDefault();
      formRef.value?.validate((errors) => {
        if (errors) {
          return;
        }
      });

      const hashedPassword = SHA256(model.value.password);

      const payload: LoginModel = {
        email: model.value.email,
        password: hashedPassword.toString(enc.Hex),
      };

      store.login(payload);
    };

    return {
      formRef,
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
  margin: 10rem auto;
}
</style>
