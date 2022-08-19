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

import './reg.css'

const Register = () => {

    const handleSubmit = (e, { setSubmitting }) => {
        console.log('submitted....', e)
        setTimeout(() => {
            setSubmitting(false)
        }, 3000);
    }

    return (
        <Formik
            initialValues={{ userName: '', email: '', password: '', confirmPassword: '', phoneNumber: '' }}
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
                            className="register-form"
                        >
                            <Paper
                                variant="elevation"
                                elevation={3}
                                className="register-background"
                            >
                                <Grid item>
                                    <Typography component="h1" variant="h5">
                                        Register
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Form style={{ width: '30vw' }}>
                                        <Grid container direction="column" spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type="text"
                                                    placeholder="User Name"
                                                    fullWidth
                                                    name="userName"
                                                    variant="outlined"
                                                    value={values.userName}
                                                    onChange={handleChange}
                                                    required
                                                    autoFocus
                                                />
                                            </Grid>
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
                                                <TextField
                                                    type="password"
                                                    placeholder="Confirm Password"
                                                    fullWidth
                                                    name="confirmPassword"
                                                    variant="outlined"
                                                    value={values.confirmPassword}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    fullWidth
                                                    name="confirmPassword"
                                                    variant="outlined"
                                                    value={values.confirmPassword}
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
export default Register;