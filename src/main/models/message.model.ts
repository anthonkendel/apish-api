export class Message {
  /**
   * Variables
   */
  private message: String;

  /**
   * Public
   */
  public constructor(message: String) {
    this.message = message;
  }

  public toJson(): String {
    return JSON.stringify({
      message: this.message
    });
  }
}
