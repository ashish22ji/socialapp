import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ErrorMsg from './ErrorMsg';

function Textarea(props) {
    const {label, name, placeholder, ...rest} = props;
    return (
        <div className='controlWrap'>
            <label htmlFor={name}>{label}</label>
            <Field as='textarea' id={name} name={name} placeholder={placeholder} {...rest}/>
            <ErrorMessage name={name} component={ErrorMsg}/>
        </div>
    )
}

export default Textarea
