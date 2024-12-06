import { CamelCaseConverter } from "./camel-case.convert.util";
import { KebabCaseConverter } from "./kebab-case.convert.util";
import { PascalCaseConverter } from "./pascal-case.convert.util";
import { SnakeCaseConverter } from "./snake-case.convert.util";

export class StringConvertUtil {
  static CamelCaseConverter = CamelCaseConverter;

  static PascalCaseConverter = PascalCaseConverter;

  static SnakeCaseConverter = SnakeCaseConverter;

  static KebabCaseConverter = KebabCaseConverter;

  static convertToCapitalizeString = (str: string): string => {
    return str.toLowerCase().replace(/(^|\s)\w/g, (char) => char.toUpperCase());
  };

  static convertToTruncateString(str: string, maxLength: number) {
    if (str.length <= maxLength) {
      return str;
    }

    const truncatedString = str.substring(0, maxLength - 3);

    return `${truncatedString}...`;
  }
}
