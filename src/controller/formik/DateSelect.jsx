import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ErrorMsg from './ErrorMsg';

function DateSelect(props) {
    const {label, name, placeholder, ...rest}=props
    return (
        <div className='controlWrap'>
            <label htmlFor={name}>{label}</label>
            <Field name={name} >
                {
                    ({form, field})=>{
                        const {setFieldValue}=form
                        const {value}= field
                        return <DatePicker id={name} {...field} {...rest} selected={value} onChange={val=>setFieldValue(name, val)} />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorMsg}/>
        </div>
    )
}


export default DateSelect
