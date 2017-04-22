export class Message {
  message: String;

  constructor(message: String) {
    this.message = message;
  }

  toJson(): String {
    return JSON.stringify({
      message: this.message
    });
  }
}
