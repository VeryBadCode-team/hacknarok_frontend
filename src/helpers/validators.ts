import { FormItemRule } from 'naive-ui';

export const validateEmail = (_: FormItemRule, value: string): boolean =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    value,
  );

export const validatePhone = (_: FormItemRule, value: string): boolean =>
  /^\d{9}$/.test(value);
  
export const validateFullName = (_: FormItemRule, value: string): boolean =>
  /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/.test(value);

  export const validatePassword = (_: FormItemRule, value: string): boolean =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(value);


