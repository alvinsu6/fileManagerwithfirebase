import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../../../redux/actionCreators/authActionCreators";
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

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password)
      return toast.dark("Please fill in all fields!");

    if (password !== confirmPassword)
      return toast.dark("Passwords donot match!");

    if (password.length < 8) {
      return toast.dark("Password must be of length 8 or more");
    }
    if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      return toast.dark(
        "Password must have alteast a number and a special character!"
      );
    }

    const data = {
      name,
      email,
      password,
    };

    dispatch(registerUser(data, setError));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (isLoggedIn) {
      history.push("/dashboard");
    }
  }, [error, isLoggedIn]);
  return (

    <MDBContainer className='login' fluid>
    <br />
<div className="logoNav" >
<img src="../public/drive.png" />&nbsp; Awan File
</div>
<form  onSubmit={handleSubmit}> 

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
<MDBCol col='12'>

<MDBCard className=' text-dark my-5 mx-auto' style={{borderRadius: '2rem', maxWidth: '400px',backgroundColor:' rgba(175, 205, 255, 0.723)'}}>
  <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
    <p className="text-black-50 mb-5">Please enter data for register !</p>
    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="name" labelClass='text-dark' label='Name '  type='text' size="lg"  onChange={(e) => setName(e.target.value)}  />
    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="email" labelClass='text-dark' label='Email address'  type='email' size="lg"  onChange={(e) => setEmail(e.target.value)}  />
    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="password" labelClass='text-dark' label='Password'  type='password' size="lg" onChange={(e) => setPassword(e.target.value)} ></MDBInput>
    <MDBInput wrapperClass='mb-4 mx-5 w-100' id="password" labelClass='text-dark' label='Confirm Password'  type='password' size="lg"  onChange={(e) => setConfirmPassword(e.target.value)} ></MDBInput>
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
    <p className="mb-0"  >Have acount ? <a href="/login">login</a> </p>

    </div>
  </MDBCardBody>
</MDBCard>

</MDBCol>
</MDBRow>
</form>
</MDBContainer>


    
    // <Container>
    //   <Row>
    //     <Col md="12">
    //       <h1 className="display-1 my-5 text-center">Register</h1>
    //     </Col>
    //     <Col md="5" className="mx-auto">
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group controlId="formBasicName" className="mb-3">
    //           <Form.Control
    //             type="text"
    //             placeholder="Name"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formBasicEmail" className="mb-3">
    //           <Form.Control
    //             type="email"
    //             placeholder="Email"
    //             value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formBasicPassword" className="mb-3">
    //           <Form.Control
    //             type="password"
    //             placeholder="Password"
    //             value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
    //           <Form.Control
    //             type="password"
    //             placeholder="Re-type password"
    //             value={confirmPassword}
    //             onChange={(e) => setConfirmPassword(e.target.value)}
    //           />
    //         </Form.Group>
    //         <Form.Group controlId="formBasicBtn" className="mt-3">
    //           <Button
    //             variant="primary"
    //             type="submit"
    //             className="form-control"
    //             block
    //           >
    //             Register
    //           </Button>
    //         </Form.Group>
    //         <p className=" text-right d-flex align-items-center justify-content-end gap-2 ml-auto my-4">
    //           Already a Member?
    //           <Link to="/login" className="ml-2 text-decoration-none">
    //             Login
    //           </Link>
    //         </p>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Register;
