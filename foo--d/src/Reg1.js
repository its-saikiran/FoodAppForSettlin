import * as React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Formik, Form } from "formik";

const Register = () => {

    const handleSubmit = (e, { setSubmitting }) => {
        // console.log(e)
        setTimeout(()=> {
            setSubmitting(false)
        }, 3000)
    };

    return (
        <>

            <Formik
                initialValues={{ name: '', email: '', password: '', confirmPassword: '', phoneNumber: '' }}
                onSubmit={handleSubmit}
            >
                {({ values, handleChange, isSubmitting }) => (

                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", height: '100vh', width: '100vw' }}>

                        <Form style={{ width: '40vw', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            <TextField id="standard-basic" label="Name" variant="standard" type="text" onChange={handleChange} value={values.name} name='name'/>
                            <TextField id="standard-basic" label="Email" variant="standard" type="email" onChange={handleChange} value={values.email} name='email' />
                            <TextField id="standard-basic" label="Password" variant="standard" type="text" onChange={handleChange} value={values.password} name='password' />
                            <TextField id="standard-basic" label="Confirm Password" variant="standard" type="text" onChange={handleChange} value={values.confirmPassword} name='confirmPassword' />
                            <TextField id="standard-basic" label="Phone Number" variant="standard" type="number" onChange={handleChange} value={values.phoneNumber} name='phoneNumber' />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 5 }}
                                disabled={isSubmitting}
                                >
                                Submit
                            </Button>
                        </Form>
                    </div>
                )}
            </Formik>

        </>
    );
};

export default Register;