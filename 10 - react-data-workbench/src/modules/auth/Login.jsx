import { Formik, Form, Field, ErrorMessage } from "formik";

function Login() {

    return (
        <Formik
            initialValues={{
                email: " ",
                password: ""
            }}

            validate={(values) => {
                const errors = {};

                if (!values.email) {
                    errors.email = "Enter a Correct Email Address";
                }
                else if (!/\S+@\S+\.\S+/.test(values.email)) {
                    errors.email = "Invalid Email Address Please Check the Email Format"
                }

                if (!values.password) {

                    errors.password = "Enter a Correct Password";
                }
                else if (values.password.length < 5) {
                    errors.password = "Minimum 5 Characters Required";
                }

                return errors;
            }}

            onSubmit={(values, { setSubmitting, resetForm }) => {

                console.log("User Form Data", values);

                setTimeout(() => {
                    alert("User Login Successfully");
                    setSubmitting(false);
                    resetForm();
                }, 1000);

            }}
        >
            {({ isSubmitting }) => {
                return (      // we need to must return here either by use word return or by use of () parenthesis 
                    <Form>

                        <h2>Login</h2>
                        <Field name="email" placehollder="Enter a Email Address" />
                        <ErrorMessage name="email" compenent="div" style={{ color: "red" }} /> <br />

                        <Field name="password" placehollder="Enter a Password" />
                        <ErrorMessage name="password" compenent="div" style={{ color: "red" }} /> <br />

                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? "Logging In Please Wait" : "Login Please"}
                        </button>
                    </Form>
                )
            }}
        </Formik>
    )

}

export default Login;