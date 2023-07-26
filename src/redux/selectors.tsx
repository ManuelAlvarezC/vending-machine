import type { RootState } from './store';


const getBalance = (state: RootState) => state.vendingMachine.balance
const getUsername = (state: RootState) => state.vendingMachine.name

export const selectors = {
    getBalance,
    getUsername
}