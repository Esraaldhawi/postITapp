import { Container, Button, Form, FormGroup, Row, Col } from "reactstrap";
import { userSchemaValidation } from "../Validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addUser, deleteUser,  } from "../Features/UserSlice";
import { Link } from "react-router-dom"; 

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const onSubmit = (data) => {
    try {
      const userData = {
        name:data.name,
        email:data.email,
        password:data.password,
      }

      dispatch(addUser(userData));

      console.log("Form Data", data);
      alert("Validation Works");
    }
    catch(error) {
      console.log(error)
    }
    
  };

  const handleDelete = (email => {
    dispatch(deleteUser(email));
  }
  )

  const userList = useSelector((state)=>state.users.value);

  return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
          <Form className="div-form" onSubmit={handleSubmit(onSubmit)}>
            <section className="form">

              {/* Name */}
              <FormGroup className="form-control">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Enter Your Name"
                  {...register("name",
                    {onchange:(e)=>setName(e.target.value)}
                  )}
                />
                <p className="error">{errors.name?.message}</p>
              </FormGroup>

              {/* Email */}
              <FormGroup className="form-control">
                <input
                  id="Email"
                  className="form-control"
                  placeholder="Email"
                  type="email"
                  {...register("email",
                    {onChange:(e)=>setEmail(e.target.value)}
                  )}
                />
                <p className="error">{errors.email?.message}</p>
              </FormGroup>

              {/* Password */}
              <FormGroup className="form-control">
                <input
                  id="Password"
                  className="form-control"
                  placeholder="Password"
                  type="password"
                  {...register("password",
                    {onChange:(e)=>setPassword(e.target.value)}
                  )}
                />
                <p className="error">{errors.password?.message}</p>
              </FormGroup>

              {/* Confirm Password */}
              <FormGroup className="form-control">
                <input
                  id="ConfirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  type="password"
                  {...register("confirmPassword",
                    {onChange:(e)=>setConfirmPassword(e.target.value)}
                  )}
                />
                <p className="error">{errors.confirmPassword?.message}</p>
              </FormGroup>

              {/* Date of Birth */}
              <FormGroup className="form-control">
                <label htmlFor="dateOfBirth" className="form-label">
                  Date of Birth
                </label>

                <input
                  id="dateOfBirth"
                  type="date"
                  className="form-control"
                  {...register("dateOfBirth")}
                />

                <p className="error">
                  {errors.dateOfBirth?.message}
                </p>
              </FormGroup>

              {/* Gender */}
              <FormGroup className="form-control">
                <label className="form-label">
                  Gender
                </label>

                <div className="radio-container">

                  <div className="radio-option">
                    <input
                      id="male"
                      type="radio"
                      value="Male"
                      {...register("gender")}
                    />

                    <label htmlFor="male">
                      Male
                    </label>
                  </div>

                  <div className="radio-option">
                    <input
                      id="female"
                      type="radio"
                      value="Female"
                      {...register("gender")}
                    />

                    <label htmlFor="female">
                      Female
                    </label>
                  </div>

                </div>

                <p className="error">
                  {errors.gender?.message}
                </p>
              </FormGroup>

              {/* Submit */}
              <Button color="primary" type="submit">
                Register
              </Button>

            </section>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col md = {6}>
        <table border={1}>
          <tbody>
            {userList.map((user)=>
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
            <td><Button className="button" onClick={()=>handleDelete(user.email)}>Delete</Button></td>
            <td>
              <Link to={`/update/${user.email}/${user.name}/${user.password}`}>
              <Button color="primary">Update</Button>
              </Link>
              </td>
          </tr>
          )}
          </tbody>
        </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;