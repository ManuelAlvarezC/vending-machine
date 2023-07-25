import Axios from 'axios';
import { ProductType } from './types';

export interface GetProductsResponse {
    data: ProductType[]
}

const getProducts = async (): Promise<GetProductsResponse | undefined> => {
    try {
        console.log(process.env.REACT_APP_BACKEND_URL)
        console.log(process.env.REACT_APP_BACKEND_URL + '/products')
        const response = await Axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
        return response;
      } catch (err) {
        console.log(err)
        return;

      }
} 

const postLogin = async (): Promise<GetProductsResponse | undefined> => {
    try {
        const response = await Axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
        return response;
    } catch (err) {
        console.log(err)
        return;
    }
}


export const api = {
    getProducts,
    postLogin
      
}
