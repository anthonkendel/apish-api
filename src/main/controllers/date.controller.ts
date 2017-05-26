import {DateModel} from '../models/date.model';
import * as dateFormat from 'dateformat';
import * as uuidv4 from 'uuid/v4';

const VALID_FORMATS: string[] = ['shortDate', 'mediumDate', 'longDate', 'fullDate', 'shortTime', 'mediumTime', 'longTime', 'isoDate', 'isoTime', 'isoDateTime', 'isoUtcDateTime'];
const DEFAULT_FORMAT = 'isoUtcDateTime';

export class DateController {
  /**
   * Variables
   */
  private static _instance: DateController = new DateController();

  /**
   * Private
   */
  private constructor() {
    if (DateController._instance) {
      throw new Error('The DateController is a singleton class and cannot be created!');
    }
  }

  private toJson(date: DateModel): string {
    return JSON.stringify({
      uuid: uuidv4(),
      date: date.date
    });
  }

  private isFormatValid(format: string): boolean {
    return VALID_FORMATS.indexOf(format) >= 0;
  }

  private formatDate(date: string, format = ''): string {
    return this.isFormatValid(format) ? dateFormat(date, format) : dateFormat(date, DEFAULT_FORMAT);
  }

  /**
   * Public
   */
  public getDate(type = '', format = ''): string {
    let date = new DateModel(type);

    date.date = this.formatDate(date.date, format);

    return this.toJson(date);
  }

  public createDate(year: number, month: number, day: number, format = ''): string {
    let date = new DateModel();

    if (year && month && day) {
      date.date = year + '-' + month + '-' + day;
    }

    date.date = this.formatDate(date.date, format);

    return this.toJson(date);
  }

  public static getInstance(): DateController {
    return DateController._instance;
  }

}