import { VALIDATION_REGEXP } from "../../constants/regex.constant";

export const validateEmail = (value: string): boolean =>
  VALIDATION_REGEXP.EMAIL.test(value);

export const validateName = (value: string) =>
  VALIDATION_REGEXP.NAME.test(value);

export const validatePhoneNumber = (value: string) =>
  VALIDATION_REGEXP.PHONE_NUMBER.test(value);

export const validatePassword = (
  value: string,
  options?: {
    min: number;
    pattern: string | string[];
  }
) => {
  if (!options) {
    return VALIDATION_REGEXP.PASSWORD.test(value);
  }

  let regExpPattern: string;

  if (Array.isArray(options.pattern)) {
    regExpPattern = options.pattern.join("");
  } else {
    regExpPattern = options.pattern;
  }

  const regExp: RegExp = new RegExp(String.raw`
    /^${regExpPattern}.{${options.min},}`);

  return regExp.test(value);
};
