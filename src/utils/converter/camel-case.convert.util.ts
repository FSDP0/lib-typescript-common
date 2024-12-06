import CamelCase from "../../types/camel-case";

export class CamelCaseConverter {
  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies CamelCase.Pascalize<T>[] as CamelCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1)}` satisfies string as CamelCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToPascalCase(key),
              this.convertToPascalCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Pascalize<T>;
        default:
          return target as CamelCase.Pascalize<T>;
      }
    }
  };

  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies CamelCase.Snakelize<T>[] as CamelCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `_${char.toLocaleLowerCase()}`)}` satisfies string as CamelCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToSnakeCase(key),
              this.convertToSnakeCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Snakelize<T>;
        default:
          return target as CamelCase.Snakelize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): CamelCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies CamelCase.Kebablize<T>[] as CamelCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `-${char.toLocaleLowerCase()}`)}` satisfies string as CamelCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToKebabCase(key),
              this.convertToKebabCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as CamelCase.Kebablize<T>;
        default:
          return target as CamelCase.Kebablize<T>;
      }
    }
  };
}
