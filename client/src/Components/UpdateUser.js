import { Form, FormGroup, Input, Lable, Button, Container, Row, Col } from "reactstrap";
import { userSchemaValidation } from "../Validations/UserValidation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateUser } from "../Features/UserSlice";
import { useParams } from "react-router";

const UpdateUser = () => {
  const {user_email, user_name, user_password} = useParams();
  const [name, setName] = useState(user_name);
  const [email, setEmail] = useState(user_email);
  const [password, setPassword] = useState(user_password);
  const [confirmPassword, setConfirmPassword] = useState(user_password);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchemaValidation),
  });

  const dispatch = useDispatch();
  const handleUpdate = (data) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
  }
  dispatch(updateUser(userData));
  }  
    return (
    <Container fluid>
      <Row className="formrow">
        <Col className="columndiv1">
          <Form className="div-form" onSubmit={handleSubmit(handleUpdate)}>
            <section className="form">
              <h1>Update User</h1>
              {/* Name */}
              <FormGroup className="form-control">
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  value={name}
                  {...register("name",
                    {onChange:(e)=>setName(e.target.value)}
                  )}
                />
                <p className="error">{errors.name?.message}</p>
              </FormGroup>

              {/* Email */}
              <FormGroup className="form-control">
                <input
                  id="Email"
                  className="form-control"
                  value={email} readOnly
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
                  value={password}
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
                  value={confirmPassword}
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

              {/* Update User */}
              <Button color="primary" type="submit">
                Update
              </Button>
            </section>
          </Form>
        </Col>
      </Row>
    </Container>
              
              

    )

}

export default UpdateUser;