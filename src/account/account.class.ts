import { Client } from "./../client/client.class";
import { deposit } from "./account.service";

export class Account {
  private id: number;
  protected account_number: string;
  protected agency: string;
  private balance: number;
  protected client: Client;

  constructor(
    account_number: string,
    agency: string,
    client: Client,
    id: number
  ) {
    this.id = id;
    this.account_number = account_number;
    this.agency = agency;
    this.balance = 0;
    this.client = client;
  }

  public getId(): number {
    return this.id;
  }

  public getBalance(): number {
    return this.balance;
  }

  public getClient(): Client {
    return this.client;
  }

  public deposit(value: number): number {
    if (value > 0) {
      this.balance += value;

      return this.getBalance();
    }

    return 0;
  }

  public withdraw(value: number): number {
    if (value > 0) {
      this.balance -= value;

      return this.getBalance();
    }

    return 0;
  }

  public transferTo(
    value: number,
    account: Account
  ): string {
    this.withdraw(value);
    account.deposit(value);
    return `You transfered ${value} from ${
      this.client
    } account to ${account.getClient().name} account`;
  }
}
