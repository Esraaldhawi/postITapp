import { Container, Input, Button, Form, FormGroup, Label } from "reactstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container>
      <h1>Login</h1>

      <Form>
        <FormGroup floating>
          <Input
            id="Email"
            name="email"
            placeholder="Email"
            type="email"
          />
          <Label for="Email">
            Email
          </Label>
        </FormGroup>

        <FormGroup floating>
          <Input
            id="Password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <Label for="Password">
            Password
          </Label>
        </FormGroup>

        <Button color="primary" type="submit">
          Login
        </Button>

        <div className="mt-3">
          No Account? <Link to="/register">Sign Up Here</Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;