import React from "react";
import { Formik, Form } from 'formik';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";

import './login.css'

const Login = () => {

    const handleSubmit = (e, { setSubmitting }) => {
        console.log('submitted....', e)
        setTimeout(() => {
            setSubmitting(false)
        }, 3000);
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
        >
            {({ values, handleChange, isSubmitting }) =>
                <Grid container spacing={0} justify="center" direction="row">
                    <Grid item>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            spacing={2}
                            className="login-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={3}
                                className="login-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Login In
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Form style={{ width: '30vw' }}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="email"
                                                    placeholder="Email"
                                                    fullWidth
                                                    name="email"
                                                    variant="outlined"
                                                    value={values.email}
                                                    onChange={handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="password"
                                                    placeholder="Password"
                                                    fullWidth
                                                    name="password"
                                                    variant="outlined"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    type="submit"
                                                    className="button-block"
                                                    disabled={isSubmitting}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Form>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Forgot Password?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            }
        </Formik>
    );

}
export default Login;