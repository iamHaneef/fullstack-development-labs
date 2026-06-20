import { Formik, Form, Field, ErrorMessage } from "formik";

function Register() {

    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
                gender: "",
                terms: false
            }}

            validate={(values) => {

                const errors = {};

                if (!values.name) errors.name = "Please Enter a Name";

                if (!values.email) {
                    errors.email = "Please Enter a Valid Email Address";
                }

                if (!values.password) {
                    errors.password = "Please Enter a Password";
                }

                if (values.password != values.confirmPassword) {
                    errors.confirmPassword = "Password and Confirm Password are not Matching";
                }

                if (!values.gender) {
                    errors.gender = "Please Select a Gender";
                }

                if (!values.terms) {
                    errors.terms = "You must agree to the terms and conditions";
                }

                return errors;
            }}

            onSubmit={() => {
                console.log(values);

                setTimeout(() => {
                    alert("Registeration Successful");
                }, 1000)
            }}
        >

            {() => (
                <Form>
                    <h2>Register</h2>

                    <Field name="name" type="text" placeholeder="Please Enter a Name" />
                    <ErrorMessage name="name" compenent="div" style={{ color: "red" }} /> <br />

                    <Field name="email" type="email" placeholeder="Please Enter a Valid Email Address" />
                    <ErrorMessage name="email" compenent="div" style={{ color: "red" }} /> <br />

                    <Field name="password" type="password" placeholeder="Please Enter a Password" />
                    <ErrorMessage name="password" compenent="div" style={{ color: "red" }} /> <br />

                    <Field name="confirmPassword" type="password" placeholeder="Please Enter a Confirm Password" />
                    <ErrorMessage name="confirmPassword" compenent="div" style={{ color: "red" }} /> <br />

                    <div>
                        <label>Please Select a Gender:</label>
                        <label>
                            <Field type="radio" name="gender" value="male" />Male
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="female" />Female
                        </label>
                        <label>
                            <Field type="radio" name="gender" value="other" />Other
                        </label>
                        <ErrorMessage name="gender" component="div" style={{ color: "red" }} />
                    </div> <br />

                    <div>
                        <label>Terms</label>
                        <label>
                            <Field type="checkbox" name="terms" value="true" />I agree to the terms
                        </label>
                        <ErrorMessage name="terms" compenent="div" style={{ color: "red" }} />

                    </div>

                    <button type="submit">Register</button>

                </Form>
            )}
        </Formik>
    )
}
export default Register;