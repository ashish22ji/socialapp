import React from 'react';
import DateSelect from './DateSelect';
import Input from './Input';
import Textarea from './Textarea';


function FormikControl(props) {
    const {control, ...rest} = props
    switch(control){
        case 'input': return <Input {...rest}/>
        case 'textarea': return <Textarea {...rest}/>
        case 'select':    
        case 'radio':
        case 'checkbox':
        case 'date': return <DateSelect {...rest}/>
            default: return null        
    }

}

export default FormikControl
