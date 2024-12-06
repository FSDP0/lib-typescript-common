import KebabCase from "../../types/kebab-case";

export class KebabCaseConverter {
  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies KebabCase.Camelize<T>[] as KebabCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(/-([a-z])/g, (_, char: string) =>
            char.toUpperCase()
          ) satisfies string as KebabCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToCamelCase(key),
              this.convertToCamelCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Camelize<T>;
        default:
          return target as KebabCase.Camelize<T>;
      }
    }
  };

  static convertToSnakeCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Snakelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToSnakeCase(item)
      ) satisfies KebabCase.Snakelize<T>[] as KebabCase.Snakelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(
            /-([a-z])/g,
            (_, char: string) => `_${char.toLowerCase()}`
          ) satisfies string as KebabCase.Snakelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToSnakeCase(key),
              this.convertToSnakeCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Snakelize<T>;
        default:
          return target as KebabCase.Snakelize<T>;
      }
    }
  };

  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): KebabCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies KebabCase.Pascalize<T>[] as KebabCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1).replace(/-([a-z])/g, (_, char: string) => char.toUpperCase())}` satisfies string as KebabCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToPascalCase(key),
              this.convertToPascalCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as KebabCase.Pascalize<T>;
        default:
          return target as KebabCase.Pascalize<T>;
      }
    }
  };
}
