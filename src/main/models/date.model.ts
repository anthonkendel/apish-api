import * as faker from 'faker';
import * as dateFormat from 'dateformat';

export class Date {
  /**
   * Variables
   */
  private date: any;

  /**
   * Private
   */
  private generateDate(type = ''): any {
    let date: any = '';

    switch (type) {
      case 'past':
        date = faker.date.past();
        break;
      case 'future':
        date = faker.date.future();
        break;
      case 'recent':
        date = faker.date.recent();
        break;
      default:
        date = faker.date.recent(1);
        break;
    }

    return date;
  }

  private formatDate(format = ''): any {
    return format ? dateFormat(this.date, format) : dateFormat(this.date, 'isoUtcDateTime');
  }

  /**
   * Public
   */
  public constructor(type = '') {
    this.date = this.generateDate(type);
  }

  public toJson(format = '') {
    let formattedDate = this.formatDate(format);
    return JSON.stringify({
      date: formattedDate
    });
  }
}
