import Axios from 'axios';
import { ProductType, UserProfileType } from './types';

export interface GetProductsResponse {
    data: ProductType[]
}

export interface LoginResponse {
    data: UserProfileType
}

Axios.defaults.withCredentials = true;



const getProducts = async (): Promise<GetProductsResponse | undefined> => {
    try {
        const response = await Axios.get(process.env.REACT_APP_BACKEND_URL + '/products');
        return response;
      } catch (err) {
        console.log(err)
        return;

      }
} 

const postLogin = async (username: string): Promise<LoginResponse | undefined> => {
    try {
        const data = {user_name: username} 
        const response = await Axios.post(process.env.REACT_APP_BACKEND_URL + 'login', data, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Content-Type': 'application/json',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        });
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
