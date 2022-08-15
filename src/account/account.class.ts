export class Account {
    protected account_number: string
    protected agency: string
    private balance: number

    constructor(account_number: string, agency: string){
        this.account_number = account_number
        this.agency = agency
        this.balance = 0
    }

    public deposit(value: number): void{
        this.balance += value
    }

    public withdraw(value: number): void{
        this.balance -= value
    }
}