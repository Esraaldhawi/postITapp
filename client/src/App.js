import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import { Container, Row } from "reactstrap";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import UpdateUser from "./Components/UpdateUser";

const App = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Header />
        </Row>

        <Row className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="/update/:user_email/:user_name/:user_password"
              element={<UpdateUser />}
            />
          </Routes>
        </Row>

        <Row>
          <Footer />
        </Row>
      </Container>
    </Router>
  );
};

export default App;