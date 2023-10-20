import axios from "axios"
import { useEffect, useState } from "react"
import { Container , Card, Button,Col,Row} from 'react-bootstrap';


const ProductCard = ({product})=>{
  return (
    <div key={product._id}>
    <Card style={{ display:"flex", margin :"5px"}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
        {product.description}
        </Card.Text>
        <Button  variant="primary">Go somewhere</Button>
      </Card.Body>
      </Card>
      </div>
  )
}  
function Products() {
  const [products , setProducts] = useState([])
  useEffect(() => {
    async function fetchdata() {
      const {data :prods} = await axios.get("http://localhost:8080/Products")
      setProducts(prods)
      console.log(prods)

    }
    fetchdata()
   
  }, [])

 
return(
    <div>
      <Container fluid="md">
        <Row>
     
            {products.map((product)=>(    
              <Col xs={3}>          
            <ProductCard product={product}/>
            </Col>
            ))}
          
        </Row>
      </Container>
    </div>
  )
}
export default Products