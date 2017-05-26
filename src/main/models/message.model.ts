export class Message {
  /**
   * Variables
   */
  private message: string;

  /**
   * Public
   */
  public constructor(message: string) {
    this.message = message;
  }

  public toJson(): string {
    return JSON.stringify({
      message: this.message
    });
  }
}
