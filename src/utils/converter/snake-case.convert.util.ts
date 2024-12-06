import SnakeCase from "../../types/snake-case";

export class SnakeCaseConverter {
  static convertToCamelCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Camelize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToCamelCase(item)
      ) satisfies SnakeCase.Camelize<T>[] as SnakeCase.Camelize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(/_([a-z])/g, (_, char: string) =>
            char.toUpperCase()
          ) satisfies string as SnakeCase.Camelize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToCamelCase(key),
              this.convertToCamelCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Camelize<T>;
        default:
          return target as SnakeCase.Camelize<T>;
      }
    }
  };

  static convertToPascalCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Pascalize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToPascalCase(item)
      ) satisfies SnakeCase.Pascalize<T>[] as SnakeCase.Pascalize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return `${target.charAt(0).toUpperCase()}${target.slice(1).replace(/_([a-z])/g, (_, char: string) => char.toUpperCase())}` satisfies string as SnakeCase.Pascalize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToPascalCase(key),
              this.convertToPascalCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Pascalize<T>;
        default:
          return target as SnakeCase.Pascalize<T>;
      }
    }
  };

  static convertToKebabCase = <T extends string | object | Array<T>>(
    target: T
  ): SnakeCase.Kebablize<T> => {
    if (Array.isArray(target)) {
      return target.map((item: T) =>
        this.convertToKebabCase(item)
      ) satisfies SnakeCase.Kebablize<T>[] as SnakeCase.Kebablize<T>;
    } else {
      switch (typeof target) {
        case "string":
          return target.replace(
            /_([a-z])/g,
            (_, char: string) => `-${char.toLowerCase()}`
          ) satisfies string as SnakeCase.Kebablize<T>;
        case "object":
          return Object.entries(target).reduce((obj, [key, value]) => {
            [key, value] = [
              this.convertToKebabCase(key),
              this.convertToKebabCase(value),
            ];

            return { ...obj, [key]: value };
          }, {}) satisfies object as SnakeCase.Kebablize<T>;
        default:
          return target as SnakeCase.Kebablize<T>;
      }
    }
  };
}
