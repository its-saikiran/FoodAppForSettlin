import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Login = () => {

    return (
        <Box
            component="form"
            sx={{
                m: 2, width: '25%'
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="standard-basic" label="Email" variant="standard" />
            <TextField id="standard-basic" label="Password" variant="standard" />
        </Box>
    );
}

export default Login;