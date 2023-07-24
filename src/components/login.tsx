import { Grid, TextField, Button } from '@mui/material';


export const LoginForm = () => {
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
                    <TextField id="username" label="Username" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <Button> Submit</Button>
                </Grid>                
            </Grid>
            <Grid container item xs={12} md={4}></Grid>
        </Grid>
    )
}


