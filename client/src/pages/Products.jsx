import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Container , Card, Button,Col,Row, CardGroup} from 'react-bootstrap';
import '../App.css';
import { shoppingCartContext } from "../App";

const ProductCard = ({product , addToCart})=>{
  const [learnMoreState, setLearnMoreState] = useState("Learn More")


  const learnMore= () => {
    if (learnMoreState =="Learn More") {
      setLearnMoreState('Show Less');
    } else {
      setLearnMoreState('Learn More');

    }
  };
  return (
    <div key={product._id}>
    <Card className="flex-fill" text="light" bg="dark" style={{ display:"grid" , minWidth:"280px",minHeight:"300px", margin :"100px" , alignItems:"center"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title className="title" >{product.name}</Card.Title>
        <Card.Text className="description">
        {product.description}
        </Card.Text>
        <Button className="butt" variant="secondary" size="sl" color="white" onClick={learnMore}>{learnMoreState}</Button>

        <Button  className="butt" variant="outline-light" size="lg"onClick={()=>addToCart(product)}>Add To Cart</Button>
      </Card.Body>
      </Card>
      </div>
  )
}  
function Products() {
  const [products , setProducts] = useState([])
  const [cart , setCart] = useContext(shoppingCartContext)

  const addToCart =(product)=>{
    setCart([...cart, product])
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
      <CardGroup fluid="md">
      <Row lg={4}>
     
            {products.map((product)=>(    
              <Col className="d-flex">          
            <ProductCard product={product} addToCart={addToCart}/>
            </Col>
            ))}
          
        </Row> 
      </CardGroup>
    </div>
  )
}
export default Products