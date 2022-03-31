<template>
  <div class="sign-up">
    <n-form ref="formRef" :model="model" :rules="rules" class="sign-up__form">
      <n-h1>Welcome</n-h1>
      <n-form-item path="name" label="Full Name">
        <n-input
          type="text"
          placeholder=""
          v-model:value="model.name"
          @keydown.enter.prevent
        />
      </n-form-item>
      <n-form-item path="email" label="Email">
        <n-input type="text" placeholder="" v-model:value="model.email" />
      </n-form-item>
      <n-form-item path="phone" label="Phone (removed?)">
        <n-input type="text" placeholder="" v-model:value="model.phone" />
      </n-form-item>
      <n-form-item path="password" label="Password">
        <n-input
          type="password"
          placeholder=""
          v-model:value="model.password"
        />
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
      <n-button type="primary" @click="handleCreateAccount">
        Create Account
      </n-button>
    </n-form>
    <div class="sign-up__footer">
      <n-p>Terms of Service</n-p>
      <n-p>Contact Support</n-p>
      <n-p>&copy; Hejka 2022</n-p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SHA256, enc } from 'crypto-js';
import {
  NInput,
  NH1,
  NP,
  NForm,
  NFormItem,
  FormInst,
  FormItemInst,
  FormRules,
  FormItemRule,
  NButton,
} from 'naive-ui';
import { SignUpModel, SignUpModelPayload } from '@/types';
import { validatePhone } from '@/helpers';
import { useAuth } from '@/store/auth';
import { splitFullName } from '@/helpers/splitFullName';

export default defineComponent({
  components: {
    NButton,
    NForm,
    NFormItem,
    NH1,
    NP,
    NInput,
  },
  setup() {
    const formRef = ref<FormInst | null>(null);
    const store = useAuth();
    const rPasswordFormItemRef = ref<FormItemInst | null>(null);

    const model = ref<SignUpModel>({
      name: '',
      email: '',
      phone: '',
      password: '',
      reenteredPassword: '',
    });

    const validatePasswordSame = (_: FormItemRule, value: string): boolean =>
      value === model.value.password;

    const rules: FormRules = {
      name: [
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
          required: false,
          message: 'Field is required',
          trigger: 'blur',
        },
        // {
        //   validator: validatePhone,
        //   message: 'Phone number must have 9 digits',
        //   trigger: 'blur',
        // },
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

    const handleCreateAccount = async (e: MouseEvent): Promise<void> => {
      e.preventDefault();
      await formRef.value?.validate((errors) => {
        if (errors) {
          return;
        }
      });

      const hashedPassword = SHA256(model.value.password);

      const { firstName, lastName } = splitFullName(model.value.name);

      const payload: SignUpModelPayload = {
        firstName,
        lastName,
        email: model.value.email,
        phone: model.value.phone,
        password: hashedPassword.toString(enc.Hex),
      };

      store.register(payload);
    };

    return {
      formRef,
      rPasswordFormItemRef,
      model,
      rules,
      handleCreateAccount,
    };
  },
});
</script>

<style lang="scss" src="./SignUp.scss" />
