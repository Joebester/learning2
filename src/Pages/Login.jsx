import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import Dialog2 from './Dailog2'

function Login() {
    return (
        <div>
            <Grid container className='bg'>
                <Grid item lg={3}></Grid>
                <Grid item xs={12} lg={6} style={{ textAlign: 'center', backgroundColor: '#fff', padding: 20, marginTop: 200, height: 300 }}>
                    <TextField
                        label="Username"
                        variant="standard"
                        fullWidth
                        style={{ marginBottom: 20, marginTop: 10 }}
                    />
                    <TextField
                        label="Password"
                        variant="standard"
                        fullWidth
                        style={{ marginBottom: 20 }}
                        type="password"
                    />
                    <Button
                        variant='contained'
                        fullWidth
                    >
                        Login
                    </Button>
                    <Dialog2 />
                </Grid>
            </Grid>
        </div>
    )
}

export default Login