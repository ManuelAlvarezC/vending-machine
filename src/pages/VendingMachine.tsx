import { FC, useState, useEffect } from 'react';
import { Products } from '../components/product';
import { Navigate } from 'react-router-dom';
import { api } from '../api';
import  { ProductType } from '../types';



export const VendingMachine: FC<{ url: string }> = (url) => {
	const user = true; // TODO connect to the redux store and retrieve the user name
	const [products, setProducts] = useState<ProductType[]>([]);
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<any>(null);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setLoading(true);
				const response = await api.getProducts();
				if (response?.data){
					setProducts(response?.data);
				}
				
				} catch (error) {
					setError(error);
				} finally {
					setLoading(false);
				}
		};
	
		fetchProducts();
	  }, [url]);
	
	  if (isLoading) {
		return <div>Loading...</div>;
	  }
	
	  if (error) {
		return <div>Error: {error.message}</div>;
	  }
	
	if (!user) {
		  return <Navigate to='/' />
	  }
  
	  return <Products products={products} />
  }