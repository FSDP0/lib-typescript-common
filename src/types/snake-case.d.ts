declare namespace SnakeCase {
  type CamelCase<S extends string> = S extends `${infer F}_${infer R}`
    ? `${Lowercase<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type PascalCase<S extends string> = S extends `${infer F}_${infer R}`
    ? `${Capitalize<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type KebabCase<S extends string> = S extends `${infer F}_${infer R}`
    ? `${F}-${R}`
    : S;

  type Camelize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Camelize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as CamelCase<string & K>]: Camelize<T[K & T]>;
          }
        : T;

  type Pascalize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Pascalize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as PascalCase<string & K>]: Pascalize<T[K & T]>;
          }
        : T;

  type Kebablize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Kebablize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as KebabCase<string & K>]: Kebablize<T[K & T]>;
          }
        : T;
}

export = SnakeCase;
