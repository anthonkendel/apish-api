import * as faker from 'faker';

export class Date {
  /**
   * Variables
   */
  private date: any;

  /**
   * Public
   */
  public constructor(type = '') {
    switch (type) {
      case 'past':
        this.date = faker.date.past();
        break;
      case 'future':
        this.date = faker.date.future();
        break;
      case 'recent':
        this.date = faker.date.recent();
        break;
      default:
        this.date = faker.date.recent(1);
        break;
    }
  }

  public toJson(format = '') {
    switch (format) {
      default:
        break;
    }

    return JSON.stringify({
      date: this.date
    });
  }
}