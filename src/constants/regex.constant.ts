export const VALIDATION_REGEXP = {
  get NAME(): RegExp {
    return /^[a-zA-Z ]+$/;
  },
  get EMAIL(): RegExp {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  },
  PASSWORD_CONSTRAINTS: {
    get LEAST_ONE_NUMBER() {
      return String.raw`(?=.*\d)`;
    },
    get LEAST_ONE_LOWERCASE_LETTER() {
      return String.raw`(?=.*[a-z])`;
    },
    get LEAST_ONE_UPPERCASE_LETTER() {
      return String.raw`(?=.*[A-Z])`;
    },
    get LEAST_ONE_SYMBOL() {
      return String.raw`(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?])`;
    },
  },
  get PASSWORD(): RegExp {
    /**
     * [ Constraint ]
     * 1. Least 8 Characters
     * 2. Least 1 uppercase letter
     * 3. Least 1 lowercase letter
     * 4. Least 1 number
     * 5. Least 1 symbol
     */

    const {
      PASSWORD_CONSTRAINTS: {
        LEAST_ONE_NUMBER,
        LEAST_ONE_SYMBOL,
        LEAST_ONE_LOWERCASE_LETTER,
        LEAST_ONE_UPPERCASE_LETTER,
      },
    } = VALIDATION_REGEXP;

    return new RegExp(
      String.raw`/^${LEAST_ONE_NUMBER}${LEAST_ONE_LOWERCASE_LETTER}${LEAST_ONE_UPPERCASE_LETTER}${LEAST_ONE_SYMBOL}.{8,}$/`
    );
  },
  get PHONE_NUMBER(): RegExp {
    return /^\d{10}$/;
  },
};
