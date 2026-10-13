import { Button,Input,Form,Container,Row,Col } from "reactstrap";

const SharePosts = () => {
  return (
    <Container>
      <Row>
        <Col>
        <Input 
        id= "share"
        name="share"
        placeholder="share your thoughts..."
        type="textarea"/>
        <br></br>
        <button> PostIT</button>
        </Col>
      </Row>
    </Container>
  );
};

export default SharePosts;
