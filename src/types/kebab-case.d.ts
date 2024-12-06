declare namespace KebabCase {
  type CamelCase<S extends string> = S extends `${infer F}-${infer R}`
    ? `${Lowercase<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type PascalCase<S extends string> = S extends `${infer F}-${infer R}`
    ? `${Capitalize<F>}${Capitalize<CamelCase<R>>}`
    : S;

  type SnakeCase<S extends string> = S extends `${infer F}-${infer R}`
    ? `${F}_${R}`
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

  type Snakelize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Snakelize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as SnakeCase<string & K>]: Snakelize<T[K & T]>;
          }
        : T;
}

export = KebabCase;
