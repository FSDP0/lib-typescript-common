export class SanitizeUtil {
  static sanitizeString(
    value: string | string[],
    pattern: RegExp | string
  ): string | string[] {
    if (Array.isArray(value)) {
      return value.map((str) => this.sanitizeString(str, pattern)) as string[];
    } else {
      if (typeof pattern === "string") {
        return value.replace(String.raw`/${value}/g`, "") as string;
      } else {
        return value.replace(pattern, "") as string;
      }
    }
  }
}
