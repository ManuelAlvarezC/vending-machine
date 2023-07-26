import { FC } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { ProductType, UserProfileType, CashType } from '../types';


export const Product = ({ name, price, quantity }: ProductType) => {
	return (
		<Grid item xs={4} md={4}>
			<Box>
				<Box sx={{fontSize: 21, fontWeight: 800 }}>{name || "Empty :("}</Box>
				<Box>Stock: {quantity || "---"} €</Box>
				<Box>Price: {price || "---"} €</Box>
				<Button>Buy</Button>
			</Box>
		</Grid>
	)
}

export const UserDisplay = ({ user_name }: UserProfileType) => {
	return (
		<Grid item xs={12}>
			{user_name}
		</Grid>
	)	
}

export const AddMoneyButton = ({ amount }: CashType) => {
	return (
		<Grid item xs={4} md={4}>
			<Button>{amount} €</Button>
		</Grid>
	)
}

export const AddMoney = () =>{
	return (
		<Grid container spacing={0}>
			<Grid item xs={12}><h3>Add money</h3></Grid>
			<AddMoneyButton amount={0.1} />
			<AddMoneyButton amount={0.2} />
			<AddMoneyButton amount={0.5} />
			<AddMoneyButton amount={1} />
			<AddMoneyButton amount={2} />
			<AddMoneyButton amount={5} />
		</Grid>
	)
	
}

export const BalanceDisplay = ({ balance}: UserProfileType) => {
	return (
		<Grid item xs={12}>
			{ balance } €
		</Grid>
	)
}

export const RefundMoneyButton = () =>{
	return (
		<Grid item xs={12}>
			Refund money
		</Grid>
	)
}



export const Products: FC<{products: ProductType[]}> = ({products}) => {
	return (
		<Grid container spacing={2}>
			<Grid container item xs={12} md={8}>
				<>
				{products.map((x, index) => (<Product key={index} name={x.name} price={x.price} quantity={x.quantity}/>))}
				</>
			</Grid>
			<Grid container item xs={12} md={4}>
				<UserDisplay balance={13.7} id="" user_name=""/>
				<AddMoney />
				<BalanceDisplay balance={13.7} id="" user_name=""/>
				<RefundMoneyButton />
			</Grid>
		</Grid>
	)
}