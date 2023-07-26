import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface VendingMachineState {
  name: string;
	balance: number;
}

const initialState: VendingMachineState = {
  name: "",
	balance: 0
}

export const vendingMachineSlice = createSlice({
  name: 'vendingMachine',
  initialState,
  reducers: {
    setBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload
    }
  }
})


export const { setBalance, setName } = vendingMachineSlice.actions

export default vendingMachineSlice.reducer