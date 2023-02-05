import React, { useContext } from "react";
import navbar from "../styles/navbar.css"
import { Context } from "../index";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white", textDecoration: "none"}} to={SHOP_ROUTE}>
          ORCHID
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={()=>navigate(ADMIN_ROUTE)}>Админ</Button>
            <Button className="navBar_button" onClick={()=>navigate(LOGIN_ROUTE)} variant={"outline-light"} >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: "white" }}>
            <Button
              variant={"outline-light"}
              onClick={() => {
                user.setIsAuth(true);
              }}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
