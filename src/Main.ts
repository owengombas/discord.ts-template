import "reflect-metadata";
import { Client } from "@typeit/discord";

export class Main {
  static start() {
    const client = new Client();
    client.login("YOUR_TOKEN", "discord/*.ts");
  }
}

Main.start();
