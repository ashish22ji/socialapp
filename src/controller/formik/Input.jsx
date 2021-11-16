import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ErrorMsg from './ErrorMsg';

function Input(props) {
    const {label, name, ...rest} = props;
    return (
        <div className='controlWrap'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={ErrorMsg}/>
        </div>
    )
}

export default Input
