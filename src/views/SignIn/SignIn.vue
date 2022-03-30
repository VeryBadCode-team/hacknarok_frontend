<template>
<!-- remove class xd and header if unused - if used create Header component and use here -->
  <div class="xd">
    <div class="header">
        <img src="../../assets/logo.svg" alt="xd">
      <nav>
        <n-p>Home</n-p>
        <n-p>Projects</n-p>
        <n-p>Career</n-p>
        <n-p>About</n-p>
        <n-p>Contact</n-p>
        <n-p class="test">Sign In</n-p>
      </nav>
    </div>
    <div class="sign-in container">
      <n-form :model="model" :rules="rules" ref="formRef" class="sign-in__form">
        <n-h1>Sign in to Hejka</n-h1>
        <n-form-item path="email" label="Email">
          <n-input type="text" placeholder="" v-model:value="model.email" />
        </n-form-item>
        <n-form-item path="password" label="Password">
          <n-input
            type="password"
            placeholder=""
            v-model:value="model.password"
          />
        </n-form-item>
        <div class="sign-in__more">
          <n-checkbox>Remember Me</n-checkbox>
          <n-p>Forgot Password?</n-p>
        </div>
        <n-button type="primary" @click="handleClick"> Sign In </n-button>
      </n-form>
      <div class="sign-in__footer">
        <n-p>Terms of Service</n-p>
        <n-p>Contact Support</n-p>
        <n-p>&copy; Hejka 2022</n-p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  NInput,
  NH1,
  NForm,
  NFormItem,
  FormRules,
  NButton,
  FormInst,
  NCheckbox,
  NP,
} from 'naive-ui';
import { SHA256, enc } from 'crypto-js';
import { LoginModel } from '@/types';
import { validateEmail } from '@/helpers';
import { useAuth } from '@/store/auth';

export default defineComponent({
  components: {
    NButton,
    NForm,
    NCheckbox,
    NFormItem,
    NH1,
    NInput,
    NP,
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

<style lang="scss" src="./SignIn.scss" />
