declare namespace HTML {
  type Attribute = {
    NAME?: string;
    NUMBER: string;
  };

  type Entity<T extends object> = {
    [K in keyof T]: Attribute;
  };
}

export = HTML;
