interface NotificationPlatform {
  sendNotification(message: string, recipient: string): void;
}

class EmailPlatform implements NotificationPlatform {
  public sendNotification(message: string, recipient: string): void {
    console.log(`Sending the message to: ${recipient} via Email`);
  }
}

class SMSPlatform implements NotificationPlatform {
  public sendNotification(message: string, recipient: string): void {
    console.log(`Sending the message to: ${recipient} via SMS`);
  }
}


class cstNotification {
  private platform: NotificationPlatform;

  constructor(platform: NotificationPlatform) {
    this.platform = platform;
  }

  public send(message: string, recipient: string): void {
    this.platform.sendNotification(message, recipient);
  }
}


const emailPlatform = new EmailPlatform();
const smsPlatform = new SMSPlatform();


const notification1 = new cstNotification(emailPlatform);
const notification2 = new cstNotification(smsPlatform);


notification1.send("Hello World!", "test@gmail.com");
notification2.send("Hello World!", "+000 1010 10 101010");