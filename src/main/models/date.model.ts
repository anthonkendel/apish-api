import * as faker from 'faker';

const VALID_TYPES: string[] = ['past', 'future', 'recent'];

export class DateModel {
  /**
   * Variables
   */
  private _date: string;

  private isTypeValid(type: string) {
    return VALID_TYPES.indexOf(type) >= 0;
  }

  private createDate(type = ''): string {
    let currentYear: number = new Date().getFullYear();
    let date: any = '';

    if (this.isTypeValid(type)) {
      switch (type) {
        case 'past':
          date = faker.date.past(currentYear);
          break;
        case 'future':
          date = faker.date.future(currentYear);
          break;
        case 'recent':
          date = faker.date.recent(10);
          break;
      }
    } else {
      date = faker.date.recent(1);
    }

    return date;
  }

  /**
   * Public
   */
  public constructor(type = '') {
    this._date = this.createDate(type);
  }

  get date(): any {
    return this._date;
  }

  set date(value: any) {
    this._date = value;
  }
}
