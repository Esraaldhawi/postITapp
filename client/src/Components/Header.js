import { Container, Nav,Navbar,NavItem,NavLink } from "reactstrap";
import logo from "../Images/logo-t.png";
import Home from "./Home";
import { Link } from "react-router-dom";
const Header = () => {

  return (
    <Container>
      <Navbar className="header">
        <Nav>
          <NavItem>
            <Link  to="/">
              <img src={logo}></img>
            </Link>
          </NavItem>
          <NavItem className="mx-3">
            <Link  to="/">
              Home
            </Link>
          </NavItem> 

          <NavItem  className="mx-3">
            <Link  to="/Profile">
              Profile
            </Link>
          </NavItem>

          <NavItem className="mx-3">
            <Link  to="/Login">
              Login
            </Link>
          </NavItem>
            
          <NavItem className="mx-3">
            <Link  to="#">
              Logout
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </Container>


  );
};

export default Header;
