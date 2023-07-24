import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';


interface ProductType {
	title: string;
	price: number;
	stock: number;
}

interface CashType {
	amount: number;
}

interface UserType {
	id: string;
	name: string;

}


export const Product = ({ title, price, stock }: ProductType) => {
	return (
		<Grid item xs={4} md={4}>
			<Box>
				<Box sx={{fontSize: 21, fontWeight: 800 }}>{title}</Box>
				<Box>Stock: {stock}€</Box>
				<Box>Price: {price}€</Box>
				<Button>Buy</Button>
			</Box>
		</Grid>
	)
}

export const UserDisplay = ({ id, name}: UserType) => {
	return (
		<Grid item xs={12}>
			{name}
		</Grid>
	)	
}

export const AddMoneyButton = ({amount}: CashType) => {
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

export const BalanceDisplay = ({amount}: CashType) => {
	return (
		<Grid item xs={12}>
			{ amount } €
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



export const Products = () => {
	return (
		<Grid container spacing={2}>
			<Grid container item xs={12} md={8}>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
				<Product title='Redbull' price={5} stock={7} />
				<Product title='Fanta' price={3} stock={7}/>
			</Grid>
			<Grid container item xs={12} md={4}>
				<UserDisplay id="000" name="Demo User"/>
				<AddMoney />
				<BalanceDisplay amount={13.7}/>
				<RefundMoneyButton />
			</Grid>
		</Grid>
	)
}