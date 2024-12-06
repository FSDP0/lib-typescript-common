import HTML from "../../types/html";
import { HTML_ENTITY } from "../../constants/html.entity.constant";

export class SanitizeHtmlUtil {
  static getEntityName(element: keyof typeof HTML_ENTITY) {
    const attr: HTML.Attribute = HTML_ENTITY[element];

    return attr.NAME;
  }

  static getEntityNumber(element: keyof typeof HTML_ENTITY) {
    return HTML_ENTITY[element].NUMBER;
  }
}
