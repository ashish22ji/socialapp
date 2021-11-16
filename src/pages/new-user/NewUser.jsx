import React, {useEffect, useState} from 'react';
import { Button, Typography } from '@material-ui/core';
import { CalendarToday, Publish, CalendarTodayRounded, CalendarViewDay, CalendarViewDayRounded, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid, Sync, TonalitySharp } from '@material-ui/icons';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormikControl from '../../controller/formik/FormikControl';
import {regex} from '../../constant/regexconstant'
import '../../controller/formik/formikcontrol.css';
import { Link } from 'react-router-dom';
import './newuser.css';
import axios from 'axios';
import { GridToolbarDensitySelector } from '@material-ui/data-grid';
import { toast } from 'react-toastify';


function NewUser() {

    useEffect(() => {
        document.title = "Registration";
    }, [])

    const [userRegister, setUserRegister] = useState({})

    const initialValues = {
        userName:'',
        firstName:'',
        lastName:'',
        //name:'',
        email:'',
        mobile:'',
        dob:'',
        address:'',
    }

    const validationSchema = Yup.object({
        userName:Yup.string().required('User Name is Mandatory Field!').min(5, 'Invalid User Name!'),
        firstName:Yup.string().required('First Name is Mandatory Field!').min(3, 'Invalid First Name!'),
        lastName:Yup.string().required('Last Name is Mandatory Field!').min(3, 'Invalid Last Name!'),
        email:Yup.string().matches(regex.email, 'Invalid Email!').required('Email is Mandatory Field!').min(3, 'Invalid Email!'),
        mobile: Yup.string().required('Mobile Number is Mandatory Field!').matches(regex.mobile,'Invalid Number!').min(10, 'Submit 10 digits of valid mobile number!').max(10, 'Invalid Mobile Number! Submit 10 digit of Valid mobile number!'),
        dob:Yup.date().required('Submit your Date of Birth!'),
        address:Yup.string().required('Please Submit your Address!').min(20, 'Invalid Address! Submit your Complete Address'),
    });

    // const onSubmit =async (values)=> {
    //     let response = () => {
    //       return new Promise(function(resolve, reject) {
    //         fetch("http://localhost:9090/getusers/", {
    //             method:"POST",
    //             body: JSON.stringify(values),
    //         }).then(response => {
    //           resolve(response);
    //         });
    //       });
    //     };
    //     let responseData = await response();
    //     console.log(responseData.values);
    //   }


    const onSubmit = async (values, onSubmitProps) => {
        //https://cors-anywhere.herokuapp.com/ 
        await axios.post("http://localhost:9090/user/", values,
                            // headers : {'Access-Control-Allow-Origin': '*', 'Content-Type':'application/json',}, 
                            // {userName: values.userName,firstName: values.firstName,lastName: values.lastName,email: values.email,mobile: values.mobile,address: values.address}
                        ).then(
            (response)=>{
                console.log("success", response);
                toast.success('Your Registration Successfully Done! ',{
                    position: toast.POSITION.TOP_CENTER,
                });             
            },(error)=>{
                console.log("error :",error);
                toast.error('Something Went Wrong! Try Again Sometime!', {
                    position:toast.POSITION.TOP_CENTER})
            } 
        )
        const data= JSON.stringify(values);
        console.log(data);
        console.log(values.userName);
        onSubmitProps.setSubmitting(false);
        onSubmitProps.resetForm();    
        // const axiosConfig = {
        //     headers:{
        //          'Access-Control-Allow-Origin': '*',
        //         'Content-Type':'application/json',
        //     },  
        //     //  body:{
        //     //      JSON.stringify(values)
        //     //      }
        // };

    //     // const instance = axios.create({
    //     //     baseURL: 'http://localhost:9090/getusers/',
    //     //     timeout: 1000,
    //     //     //headers: {'X-Custom-Header': 'foobar'}
    //     //   });

       
    
    // axios({
    //     method: 'post',
    //     url: "http://localhost:9090/getusers/",
    //     values,
    //   });
    };

    // const postDatatoServer = (data)=>{
    //     axios.post(`${base_url}/values`,data).then(
    //         (response)=>{
    //             console.log(response);
    //             console.log('Success');
    //         },
    //         (error)=>{
    //             console.log(error);
    //             console.log('error');
    //         }
    //     )
    // }

    return (
        <div className='newUserWrap'>
            <div className='newUserForm'> 
            <Typography color='primary'><h1>Create New User</h1></Typography>
            
            <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    >
                        {formik=>{
                           return <Form className='formStyle'>
                                <div className='formInput'>
                                <div className='formInputLeft'>
                                <FormikControl control='input' type='text' label='User Name' name='userName' placeholder='Creater New User Name'/>
                                <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder='First Name'/>
                                <FormikControl control='input' type='text' label='Last Name' name='lastName' placeholder='Last Name'/>
                                <FormikControl control='input' type='text' label='Email' name='email' placeholder='Email'/>
                                <FormikControl control='input' type='text' label='Mobile Number' name='mobile' placeholder='Mobile'/>
                                <FormikControl control='date' label='Date of Birth' name='dob' placeholder='Date of Birth'/> 
                                <FormikControl control='textarea' label='Address' name='address' placeholder='Address'/>
                                </div>
                                {/* <div className='formInputRight'>
                                <img className='userPhoto' src="../images/2.jpg" alt="profile photo" />    
                                <FormikControl control='input' type='file' label={<div className='uploadButton'><Publish/> Upload Photo</div>} name='imageUpload' placeholder='Upload Profile Photo' style={{display:'none' }}/>
                                <FormikControl control='input' type='file' label={<div className='uploadButton'><Publish/> Upload Identity</div>} name='IdentityUpload' placeholder='Identity Proof Upload' style={{display:'none'}}/>                                
                                </div> */}
                                </div>
                                
                                
                                <Button type='submit' style={{textAlign:'center', marginTop:'1rem'}} variant='contained' color='primary' disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
                            </Form>
                        }
                            }
                    </Formik>
            </div>
            
        </div>
    )
}

export default NewUser