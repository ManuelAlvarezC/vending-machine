import { FC } from 'react';

import { Products } from '../components/product';
import { Navigate } from 'react-router-dom';


export const VendingMachine: FC = () => {
	const user = true; // TODO connect to the redux store and retrieve the user name
	
	  // if no user, redirect to login
	if (!user) {
		  return <Navigate to='/' />
	  }
  
	  // user is logged in
	  return <Products />
  }