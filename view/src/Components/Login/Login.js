import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import loginStyle from "./login.module.scss";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {

  }

  return (

    <section>
      <div className={loginStyle.headerBackground}>

        <div className={loginStyle.loginLeft}>
          <Image src="../assets/login/white_logo.png" fluid />

        </div>
        <div className={loginStyle.loginRight}>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button size="lg" type="submit" disabled={!validateForm()}>
                <span className="spinner-border spinner-border-sm"></span>
              </Button>
            </Form.Group>

          </Form>
        </div>
      </div>
    </section>
  );
}

export default Login;