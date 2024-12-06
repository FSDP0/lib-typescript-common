import PascalCase from "../../types/pascal-case";

export class PascalCaseConverter {
  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies PascalCase.Snakelize<T>[] as PascalCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `_${char.toLowerCase()}`)}` satisfies string as PascalCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToSnakeCase(key),
              this.convertToSnakeCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Snakelize<T>;
        default:
          return target as PascalCase.Snakelize<T>;
      }
    }
  };

  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies PascalCase.Camelize<T>[] as PascalCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLowerCase()}${target.slice(1)}` satisfies string as PascalCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToCamelCase(key),
              this.convertToCamelCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Camelize<T>;
        default:
          return target as PascalCase.Camelize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): PascalCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies PascalCase.Kebablize<T>[] as PascalCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toLocaleLowerCase()}${target.slice(1).replace(/[A-Z]/g, (char: string) => `-${char.toLowerCase()}`)}` satisfies string as PascalCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToKebabCase(key),
              this.convertToKebabCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as PascalCase.Kebablize<T>;
        default:
          return target as PascalCase.Kebablize<T>;
      }
    }
  };
}
