export function isObjectEmpty<T extends object>(obj: T) {
  return Object.values(obj).some((value) => value !== undefined);
}

export function isArrayEmpty<T extends []>(arr: T) {
  return arr.length > 0;
}
