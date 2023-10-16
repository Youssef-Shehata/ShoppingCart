import { useState } from 'react';
import {Form,Button , Container , Col,Row} from 'react-bootstrap';
import axios from 'axios'
 function CreateProduct() {
  const DEFAULT_FORM_VALUE = {
    name:"",
    cost: 0,
    description:"",

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
    await axios.post('http://localhost:8080/createproduct',data)
    setData(DEFAULT_FORM_VALUE)
    console.log('operation successful')
  }
  
  return (
    <Container>
      <Row> 
        <Col></Col>
        <Col xs={6}>
        <Form>
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" 
            onChange={updateForm('name')}
            value={data.name} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cost</Form.Label>
            <Form.Control 
            type="Number"
            onChange={updateForm('cost')}
            value={data.cost} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea"
            onChange={updateForm('description')}
            value={data.description} 
            rows={3} />
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

export default CreateProduct;