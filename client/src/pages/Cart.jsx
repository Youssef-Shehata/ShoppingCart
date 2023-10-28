import React, { useContext } from 'react'
import { shoppingCartContext } from '../App'
import {   Container,Card, Button,Col,Row} from 'react-bootstrap';


const CartItem = ({product,deleteItem})=>{
  return(
      <Row>
        <Col >
        <Card.Img variant="top" src="holder.js/100px180" />

        </Col>
        <Col>
        <Card.Title className="title" style={{color:"white"}}>{product.name}</Card.Title>

        </Col>
        <Col>

        <Button  className="butt" variant="outline-light" onClick={()=>{deleteItem(product)}} size="lg">Remove</Button>
     
        
        </Col>
      </Row>
  )
}
export const Cart = () => {

  const [cart , setCart] = useContext(shoppingCartContext  )
  const deleteItem=(item)=>{
    setCart(cart.filter((product)=>{
      return product!==item
    }))
  }
  return (
    <>   
    <Container>
      <Row>
        <Col>
        <h1 style={{color:"white"}}>ShoppingCart {cart.length}</h1>

      </Col>
      </Row>
      <Row>       
        {cart.map((prod)=>(
          <CartItem product={prod} deleteItem={deleteItem} />
        ))}
      </Row>
    </Container>
    </>

  )
}
