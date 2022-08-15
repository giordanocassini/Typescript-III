import { Cc } from "./cc.class";
import { Cp } from "./cp.class";
import { Accounts } from "./accounts.interface";
import { Account } from "./account.class";

let accounts: Accounts = {
    1: new Cc("01", "01"),
    2: new Cp("02", "01")
}

export const findAll = async (): Promise<Accounts> => Object.values(accounts)
export const find = async (id:number): Promise<Account> => accounts[id]
export const create = async (newAccount: Cp | Cc): Promise<Account> => {
    const id = new Date().valueOf();

    accounts[id] = newAccount

    return accounts[id]
}
export const update = async (id: number, accountUpdate: Account): Promise<Account | null> => {
    const account = await find(id)

    if(!account){
        return null
    }

    accounts[id] = accountUpdate
    
    return accounts[id]
}
export const remove = async(id: number): Promise<null | void> => {
    const account = await find(id)

    if(!account){
        return null
    }

    delete accounts[id]
}