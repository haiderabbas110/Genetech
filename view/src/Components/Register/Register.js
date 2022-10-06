import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import registerStyle from "./register.module.scss";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {

  }

  async function handleSubmit(event) {

  }

  return (
    <section>
      <div className={registerStyle.headerBackground}>

        <div className={registerStyle.loginLeft}>
          <Image src="../assets/login/white_logo.png" fluid />

        </div>
        <div className={registerStyle.loginRight}>
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="name">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                autoFocus
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

export default Register;