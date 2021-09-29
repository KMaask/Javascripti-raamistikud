import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form } from "formik";
import ("./index.css");

function App() {
    return (
        <div className="App">
            <h1>Contact</h1>
            <Formik
                initialValues={{ name: "", email: "" }}
                onSubmit={async (values) => {
                    await new Promise((resolve) => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <Form>
                    <Field name="name" type="text" placeholder="name" required/><br/><br/>
                    <Field name="email" type="email" placeholder="email" required/><br/><br/>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));