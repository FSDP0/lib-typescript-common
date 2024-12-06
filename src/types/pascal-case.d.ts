declare namespace PascalCase {
  type CamelCase<S extends string> = Uncapitalize<S>;

  type SnakeCase<S extends string> =
    S extends `${infer F extends Capitalize<S>}${infer R extends string}`
      ? `${Lowercase<F>}_${SnakeCase<R>}`
      : S;

  type KebabCase<S extends string> =
    S extends `${infer F extends Capitalize<S>}${infer R extends string}`
      ? `${Lowercase<F>}-${KebabCase<R>}`
      : S;

  type Camelize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Camelize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as CamelCase<string & K>]: Camelize<T[K & T]>;
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

  type Kebablize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Kebablize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as KebabCase<string & K>]: Kebablize<T[K & T]>;
          }
        : T;
}

export = PascalCase;
