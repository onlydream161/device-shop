import React from "react";
import { Button, Card, Container, Form, FormText } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const location =useLocation()
    const isLocation= location.pathname ===LOGIN_ROUTE
    console.log(location)
  return (
    
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLocation? "Авторизация" :  "Регистрация"} </h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-2" placeholder="Введите ваш Email" />
          <Form.Control className="mt-2" placeholder="Введите пароль" />
          <FormText className="d-flex justify-content-between mt-3 pl-3 pr-3">
          {isLocation? 
          <div style={{width:280}}>
            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрироваться </NavLink>
          </div>: 
          <div style={{width:280}}>
            Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите </NavLink>
          </div>}
            <Button className=" mr-5" variant={"outline-success"}>
             {isLocation ?  'Войти' : 'Зарегистрироваться'}
            </Button>
          </FormText>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
