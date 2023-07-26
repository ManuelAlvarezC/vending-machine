import { Grid, TextField, Button } from '@mui/material';
import { useState } from 'react';
import { api } from '../api';
import { useDispatch } from 'react-redux'
import { setBalance, setName } from '../redux/slice';


export const LoginForm = () => {

    const dispatch = useDispatch();
    const handleLogin = () => {
        if(usernameInput){
            api.postLogin(usernameInput).then(
                (response) => {
                    const user_name = response?.data.user_name;
                    const balance = response?.data.balance;                    
                    if(user_name && balance){
                        dispatch(setName(user_name));
                        dispatch(setBalance(balance));
                    }
                }
            )
        }
    }


    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUserNameInput(value);
    }

    const [usernameInput, setUserNameInput] = useState("");
    return (
        <Grid container spacing={2}>
            <Grid container item xs={12}></Grid>
            <Grid container item xs={12}></Grid>
            <Grid container item xs={12}></Grid>
            <Grid container item xs={12} md={4}></Grid>
            <Grid container item xs={12} md={4}>
                <Grid item xs={12}>
                    <h2>Login</h2>
                </Grid>
                <Grid item xs={12}>
                    <TextField id="username" label="Username" variant="outlined" value={usernameInput} onChange={handleOnChange}/>
                </Grid>
                <Grid item xs={12}>
                    <Button onClick={handleLogin}> Submit</Button>
                </Grid>                
            </Grid>
            <Grid container item xs={12} md={4}></Grid>
        </Grid>
    )
}


