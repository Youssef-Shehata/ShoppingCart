import axios from "axios"
import { useContext, useDeferredValue, useEffect, useState } from "react"
import {   Card, Button,Col,Row, CardGroup,Form,Toast, ToastContainer} from 'react-bootstrap';
import '../App.css';
import { shoppingCartContext } from "../App";

const ProductCard = ({product , addToCart})=>{
  const [learnMoreState, setLearnMoreState] = useState("Learn More")


  const learnMore= () => {
    if (learnMoreState ==="Learn More") {
      setLearnMoreState('Show Less');
    } else {
      setLearnMoreState('Learn More');

    }
  };
  return (
    
    <Card key={product._id} className="flex-fill mb-8 mt-4" text="light" bg="dark" >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body >
        <Card.Title className="title" >{product.name}</Card.Title>
        <Card.Text className="description">
        {product.description}
        </Card.Text>
        <Button className="butt" variant="secondary" size="sl" color="white" onClick={learnMore}>{learnMoreState}</Button>

        <Button  className="butt" variant="outline-light" size="lg"onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Body>
      </Card>

  )
}  
export const Products = () => {
  const [products , setProducts] = useState([])
  const [showToast, setShowToast] = useState(false);

  const [cart , setCart] = useContext(shoppingCartContext)
  const [searchQueryState , setSearchQueryState] = useState('')
  // const visibleQuery = useDeferredValue(searchQueryState)

  const addToCart =(product)=>{
    setCart([...cart, {...product}])
    setShowToast(true)
  }

  const handleSearch = (e)=>{
    setSearchQueryState(e.currentTarget.value)  

  }


  const getFilteredProducts = (products)=>{
    return products.filter(  (prod)=>{
      return prod.name.includes(searchQueryState)
      }
      )
  } 

    


  useEffect(() => {
    async function fetchdata() {
      const {data :prods} = await axios.get("http://localhost:8080/Products")
      setProducts(prods)

    }
    fetchdata()
   
  }, [])

 
return(
  <div>
    <ToastContainer
      className="p-3"
      position={"top-center"}
      style={{ zIndex: 1 }}
    >
      <Toast 
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={1000} autohide
        bg="light"
       
        
        >

        <Toast.Header closeButton={false}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Cart</strong>
          <small>1 sec ago</small>
        </Toast.Header>
        <Toast.Body>Product Added Scuccesfully!</Toast.Body>
      </Toast>
    </ToastContainer>
    
    <CardGroup >
      <Row 
        lg={1} 
        style={{minWidth:"100vw",marginLeft:"3px "}}
        >
        <Col>
        
        <Form.Control 
        className="mb-2  mt-3 " 
        size="lg"
        type="text" 
        placeholder="Enter a products name"
        value={searchQueryState}
        onChange={handleSearch}
        />

        </Col>
        </Row>
      <Row lg={4}>

          {getFilteredProducts(products).map((product)=>(    
            <Col className="d-flex">          
          <ProductCard product={product} addToCart={addToCart}/>
          </Col>
          ))}

      </Row> 
    </CardGroup>
  </div>
)
}
