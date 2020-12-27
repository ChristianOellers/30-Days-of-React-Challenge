import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const validateFn = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } 
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
}


const submitFn = (values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};


const Form2 = () => (
  <div>
    <h1>Formik</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={validateFn}
      onSubmit={submitFn}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type='email' placeholder='email' name='email' />
          <ErrorMessage name='email' component='div' />
          <Field type='password' placeholder='password' name='password' />
          <ErrorMessage name='password' component='div' />
          <button type='submit' disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);


export default Form2;

