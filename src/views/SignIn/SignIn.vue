<template>
  <div class="sign-in">
    <n-form :model="model" :rules="rules" ref="formRef" class="sign-in__form">
      <n-h1>Welcome to VeryBadCode</n-h1>
      <n-h2>Sign in to continue</n-h2>
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
      <div class="sign-in__buttons">
        <n-button type="primary" @click="handleSignIn"> Sign In </n-button>
        <n-p>
          <span> Don't have an account? </span>
          <router-link to="/signup">Sign Up</router-link></n-p
        >
      </div>
    </n-form>
    <div class="sign-in__footer">
      <n-p>Terms of Service</n-p>
      <n-p>Contact Support</n-p>
      <n-p>&copy; Hejka 2022</n-p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import {
  NInput,
  NH1,
  NH2,
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
    NH2,
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
          message: 'Please enter a valid email address',
          trigger: 'blur',
        },
      ],
      password: [
        {
          required: true,
          message: 'Please enter your password',
          trigger: 'blur',
        },
      ],
    };

    const handleSignIn = async (e: MouseEvent): Promise<void> => {
      e.preventDefault();
      await formRef.value?.validate((errors) => {
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
      handleSignIn,
    };
  },
});
</script>

<style lang="scss" src="./SignIn.scss" />
