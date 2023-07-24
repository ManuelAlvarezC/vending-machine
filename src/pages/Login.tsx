import { FC } from 'react';
import { LoginForm } from '../components/login';
import { Navigate } from 'react-router-dom';

export const Login: FC = () => {

    const user = false; // TODO connect to the redux store and retrieve the user name
  
    // if user, no need to login again, redirect to vending machine home
    if (user) {
		return < Navigate to="/vending-machine" />
	}

	return <LoginForm />
}