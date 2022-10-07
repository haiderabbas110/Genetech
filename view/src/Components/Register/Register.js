import React, { useState, useEffect } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import registerStyle from "./register.module.scss";
import axios from "axios";
import { API_URL } from "../../Constants";
import useForm from "../../useForm";
import validate from '../../ValidationRule';

const Register = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  function login() {
    console.log('No errors, submit callback called!');
    const {
      fname,
      lname,
      email,
      phone,
      password
    } = values

    return axios.post(API_URL + "user", {
      'firstname' : fname,
      'lastname' : lname,
      'email' : email,
      'phone' : phone,
      'password' : password,

    })
      .then((response) => {

        return response.data;
      });
  }

  return (
    <section>
      <div className={registerStyle.headerBackground}>

        <div className={registerStyle.loginLeft}>
          <Image src="../assets/login/white_logo.png" fluid />

        </div>
        <div className={registerStyle.loginRight}>
          <Form onSubmit={handleSubmit} noValidate>
            <Form.Group size="lg" controlId="name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                autoFocus
                name="fname"
                type="text"
                placeholder={errors.fname && (errors.fname)}
                value={values.fname || ''}
                className={`input ${errors.fname && 'is-danger'}`}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group size="lg" controlId="name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                autoFocus
                name="lname"
                type="text"
                placeholder={errors.lname && (errors.lname)}
                value={values.lname || ''}
                className={`input ${errors.lname && 'is-danger'}`}
                onChange={handleChange}
                required
              />
              
            </Form.Group>
            <Form.Group size="lg" controlId="password">
              <Form.Label>Email</Form.Label>
              <Form.Control
                autoFocus
                name="email"
                type="email"
                placeholder={errors.email && (errors.email)}
                value={values.email || ''}
                className={`input ${errors.email && 'is-danger'}`}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group size="lg" controlId="name">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                autoFocus
                name="phone"
                type="text"
                placeholder={errors.phone && (errors.phone)}
                value={values.phone || ''}
                className={`input ${errors.phone && 'is-danger'}`}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                autoFocus
                name="password"
                type="password"
                placeholder={errors.password && (errors.password)}
                value={values.password || ''}
                className={`input ${errors.email && 'is-danger'}`}
                onChange={handleChange}
                required
              />
              <Button size="lg" type="submit">
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