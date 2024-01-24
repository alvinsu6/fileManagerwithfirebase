import React, { useEffect, useState } from "react";
// import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../../redux/actionCreators/authActionCreators";
import './login.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}

from 'mdb-react-ui-kit';
import { FcGoogle} from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Logo from '../../../asset/awan cl.JPG'
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) return toast.dark("Please fill in all fields!");
    const data = {
      email,
      password,
    };
    dispatch(loginUser(data, setError));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isLoggedIn) {
      history.goBack();
    }
  }, [error]);
  return (

    <MDBContainer className='login' fluid>
    <br />
<div className="logoNav" >
<img style={{height:'30px'}} src={Logo} alt="cele"/>&nbsp;
</div>
<form  onSubmit={handleSubmit}> 

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
<MDBCol col='12'>

<MDBCard className=' text-dark my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '400px',backgroundColor:' rgba(175, 205, 255, 0.723)'}}>
  <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
    <p className="text-black-50 mb-5">Please enter your login and password!</p>

    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="email" labelClass='text-dark' label='Email address'  type='email' size="lg"  onChange={(e) => setEmail(e.target.value)}  />
    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="password" labelClass='text-dark' label='Password'  type='password' size="lg" onChange={(e) => setPassword(e.target.value)} ></MDBInput>
    <p className="small mb-3 pb-lg-2"><a className="text-black-50" href="#!">Forgot password?</a></p>
    {/* <Link to="/menu"> */}
    <button   style={{
      backgroundColor:'rgb(39, 38, 38)',
      borderRadius:'8px',
      fontSize:'20px',
      fontFamily:'sans-serif',
      fontWeight:'bolder',
      color:'grey',
      width:'100px'
      }} type='submit'>
      Login
    </button>
   
    {/* </Link> */}
    <div className='d-flex flex-row mt-3 mb-5'>
      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
        <MDBIcon fab icon='facebook-f' size="lg"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
        <MDBIcon fab icon='twitter' size="lg"/>
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
        <MDBIcon fab icon='google' size="lg"/>
      </MDBBtn>
    </div>

    <div>
    <p className="mb-0"  >Dont have acount ? <a href="/signup">Register</a></p>

    </div>
  </MDBCardBody>
</MDBCard>

</MDBCol>
</MDBRow>
</form>
</MDBContainer>
   
  );
};

export default Login;
