declare namespace CamelCase {
  type PascalCase<S extends string> = Capitalize<S>;

  type SnakeCase<S extends string> =
    S extends `${infer F extends Uncapitalize<S> | Capitalize<S>}${infer R extends string}`
      ? `${Lowercase<F>}_${SnakeCase<R>}`
      : S;

  type KebabCase<S extends string> =
    S extends `${infer F extends Uncapitalize<S> | Capitalize<S>}${infer R extends string}`
      ? `${Lowercase<F>}-${KebabCase<R>}`
      : S;

  type Pascalize<T extends string | object | Array<T>> =
    T extends Array<infer TI>
      ? Array<Pascalize<TI & T>>
      : T extends object
        ? {
            [K in keyof T as Pascalize<string & K>]?: Pascalize<T[K & T]>;
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
            [K in keyof T as KebabCase<string & K>]: Snakelize<T[K & T]>;
          }
        : T;
}

export = CamelCase;
