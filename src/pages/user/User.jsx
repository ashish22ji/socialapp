import React, {useEffect, useState} from 'react';
import './user.css';
import { Button } from '@material-ui/core';
import { CalendarToday, Publish, CalendarTodayRounded, CalendarViewDay, CalendarViewDayRounded, LocationSearching, MailOutlined, PermIdentity, PhoneAndroid } from '@material-ui/icons';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import FormikControl from '../../controller/formik/FormikControl';
import {regex} from '../../constant/regexconstant'
import '../../controller/formik/formikcontrol.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base_url from '../../api/bootapi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/'
import 'react-toastify/dist/ReactToastify.css';


function User(props) {

    useEffect(() => {
        document.title = "Profile Update || Soci App";                
    }, []);

  const [user, setUser] = useState([]);
  const [dob, setDob] = useState("");
//   const [lastName, setFirstName] = useState("");
//   const [firstName, setLastName] = useState("")
//   const [address, setAddress] = useState("")
//   const [email, setEmail] = useState("")
//   const [mobile, setMobile] = useState("")

    useEffect(() => {
        //getUsersListFromServer();
        const userId = props.match.params.id;
        //console.log('userId : ',userId);
        if(userId){
        axios.get(`${base_url}/user/`+userId).then(
            (response)=>{
                console.log('Success : ', response);
                console.log('Success : ', response.data);
                setUser(response.data);
                setDob(new Date(response.data.dob).toLocaleDateString());
               //setUserName(response.data.userName);
                //console.log(response.data.);
                 //setUserName(respone.data.name)
                // setUserName(respone.data[0].name)
                // setUserName(respone.data[0].name)
                // setUserName(respone.data[0].name)
                // setUserName(respone.data[0].name)
            },
            (error)=>{ 
                console.log('error : ', error);
            }
        )
        
    }
    console.log("userdob : ", user.dob);

}, [])

    // useEffect(() => {
    //     getUserFromServer();
    // }, [])
    
    // const getUserFromServer = () => {
        
    // };


        const initialValues ={
            userName:'',
            firstName:'',
            lastName:'',
            email:'',
            mobile:'',
            dob:'',
            address:'',
        }
        const userValues ={
            userName:user.userName,
            firstName:user.firstName,
            lastName:user.lastName,
            email:user.email,
            mobile:user.mobile,
            // dob:new Date((dob.getMonth()+1)+"/"+dob.getDate()+"/"+dob.getFullYear()),
            //dob:dob,
            dob:new Date(),  
            address:user.address,
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

        const onSubmit = (values, onSubmitProps) => {
            axios.put(`${base_url}/user/`+props.match.params.id,values).then(
                (response)=>{
                    console.log('Success : ', response);
                    //setUsers(response.data);
                    toast.success('Your Registration Successfully Done! ',{
                        position: toast.POSITION.TOP_CENTER,
                    });
                },
                (error)=>{ 
                    console.log('error : ', error);
                    toast.error('Something Went Wrong! Try Again Sometime!', {
                        position:toast.POSITION.TOP_CENTER})
                }
            )
            console.log('form data', values );
            const data= JSON.stringify(values);
            console.log(data);
            console.log(values.userName);
            onSubmitProps.setSubmitting(false);
            onSubmitProps.resetForm();
    };

    return (
        <div className='userApp'>
            <div className='userWrap'>
            <div className='userTitle'>
                <h2>Edit User</h2>
                <Link to='/newUser'><Button variant='contained' color='primary'>Create</Button></Link>                
            </div>

            <div className='userIdentityWrap'>
                <div className="userContainer">
                    <div className='userProfileWrap'>
                        <div className="userProfile">
                            <img src='../images/2.jpg' alt="1.jpg" />
                            <div className="userInfo">
                                <h3 className="userName">
                                    {user.firstName +' ' + user.lastName}</h3>
                                <span className="userDesignation">Software Engineer</span>
                            </div>
                        </div>
                    </div>

                    <div className='userInfoDesc'>
                        <h4>Account Details</h4>
                        <div className="userIdentity">
                            <PermIdentity />
                            <span>{user.userName}</span>
                        </div>
                        <div className="userIdentity">
                            <CalendarTodayRounded />
                            <span>{dob}</span>
                        </div>
                        <h4>Contact Details</h4>
                        <div className="userIdentity">
                            <PhoneAndroid />
                            <span>{user.mobile}</span>
                        </div>
                        <div className="userIdentity">
                            <MailOutlined />
                            <span>{user.email}</span>
                        </div>
                        <div className="userIdentity">
                            <LocationSearching />
                            <span> Delhi | India</span>
                        </div>
                    </div>
                </div>

                <div className="userEdit">
                    <Formik
                    initialValues={userValues || initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize
                    >
                        {formik=>(
                            <Form className='formStyle'>
                                <div className='formInput'>
                                <div className='formInputLeft'>
                                <FormikControl control='input' type='text' label='User Name' name='userName' placeholder='Create User Name'/>
                                <FormikControl control='input' type='text' label='First Name' name='firstName' placeholder='First Name'/>
                                <FormikControl control='input' type='text' label='Last Name' name='lastName' placeholder="Last Name"/>
                                <FormikControl control='input' type='email' label='Email' name='email' placeholder="E-mail"/>
                                <FormikControl control='input' type='number' label='Mobile Number' name='mobile' placeholder="Mobile Number"/>
                                <FormikControl control='date' label='Date of Birth' name='dob' placeholder='Date of Birth'/>
                                <FormikControl control='textarea' label='Address' name='address' placeholder={user.address}/>
                                </div>
                                <div className='formInputRight'>
                                <img className='userPhoto' src="../images/2.jpg" alt="profile photo" />    
                                <FormikControl control='input' type='file' label={<div className='uploadButton'><Publish/> Upload Photo</div>} name='imageUpload' placeholder='Upload Profile Photo' style={{display:'none' }}/>
                                <FormikControl control='input' type='file' label={<div className='uploadButton'><Publish/> Upload Identity</div>} name='IdentityUpload' placeholder='Identity Proof Upload' style={{display:'none'}}/>
                                </div>
                                </div>
                                
                                
                                <Button type='submit' style={{textAlign:'center', marginTop:'1rem'}} variant='contained' color='primary'>Update</Button>
                            </Form>
                        )
                            }
                    </Formik>
                </div>
            </div>

        </div>
    </div>    
    )
}

export default User
