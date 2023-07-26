import { FC } from 'react';
import { LoginForm } from '../components/login';
import { Navigate } from 'react-router-dom';
import type { RootState } from '../redux/store'
import { useSelector } from 'react-redux'


export const Login: FC = () => {
    const username = useSelector((state: RootState) => state.vendingMachine.name)
    // if user, no need to login again, redirect to vending machine home
    if (username) {
		return < Navigate to="/vending-machine"  />
	}
    return <LoginForm />
}


