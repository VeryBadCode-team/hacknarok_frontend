import { FormItemRule } from 'naive-ui';

export const validatePhone = (rule: FormItemRule, value: string): boolean =>
  /^\d{9}$/.test(value);
