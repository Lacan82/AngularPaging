
export class Sessions {
  public cursor: string[];
  public items: any[];
  public more: boolean;

  constructor(cursor: any, items: any, more: any) {
    this.cursor = cursor;
    this.items = items;
    this.more = more;

  }
}

