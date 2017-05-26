import * as faker from 'faker';
import * as dateFormat from 'dateformat';

const VALID_TYPES: string[] = ['past', 'future', 'recent'];
const VALID_FORMATS: string[] = ['shortDate', 'mediumDate', 'longDate', 'fullDate', 'shortTime', 'mediumTime', 'longTime', 'isoDate', 'isoTime', 'isoDateTime', 'isoUtcDateTime'];
const DEFAULT_FORMAT = 'isoUtcDateTime';

export class Date {
  /**
   * Variables
   */
  private date: any;

  /**
   * Private
   */
  private generateDate(type = ''): string {
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

  private validateFormat(format: string): boolean {
    return VALID_FORMATS.indexOf(format) >= 0;
  }

  private formatDate(format = ''): string {
    return this.validateFormat(format) ? dateFormat(this.date, format) : dateFormat(this.date, DEFAULT_FORMAT);
  }

  /**
   * Public
   */
  public constructor(type = '') {
    this.date = this.generateDate(type);
  }

  public toJson(format = ''): string {
    let formattedDate = this.formatDate(format);

    return JSON.stringify({
      date: formattedDate
    });
  }
}
