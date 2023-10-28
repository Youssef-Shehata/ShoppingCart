import React from 'react'



import { useState } from 'react';
import {Form,Button , Container , Col,Row} from 'react-bootstrap';
import axios from 'axios'
  const RegisterPage = () => {
    const DEFAULT_FORM_VALUE = {
      userName:"",
      password: '',
    }
    const [data , setData ] =  useState(DEFAULT_FORM_VALUE)
    const updateForm = (key) =>{
      return (e)=>{
        setData({
          ...data,
          [key]:e.currentTarget.value,
          })
      }
    }
  
  
    const formSubmit = async(e)=>{
      e.preventDefault()
      if(data.userName !== "" , data.password!==''){
        await axios.post('http://localhost:8080/register',data)
        setData(DEFAULT_FORM_VALUE)
        console.log('operation successful')
      }else{
        setData({
          ...data,
          userName:"username is required!",
          password:"password is required!"
        })
        return false
      }
      
    }
  
  
    return (
    <Container>
      <Row> 
        <Col></Col>
        <Col xs={6}>
          <h1>Register</h1>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Username</Form.Label>
            <Form.Control 
            onChange={updateForm('name')}
            value={data.userName} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type='password'
            onChange={updateForm('password')}
            value={data.password} />
          </Form.Group>
       
      <Button variant="primary" type="submit" onClick={formSubmit}>
        Submit
      </Button>
    </Form>
      
      
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}



export default RegisterPage