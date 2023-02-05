import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import bigStar from "../assets/favourite.png";

const DevicePage = () => {
  const device = {
    id: 1,
    name: "iphone 12 pro",
    price: 25000,
    rating: 5,
    img: "https://www.phonebunch.com/news-images/2022/03/iPhone-14-Pro-and-iPhone-14-Pro-Max-leak-schematics-phonebunch.jpg",
  };
  const description = [
    {id:1, title: "Телефон ",description: "Ну он прикольный Телефон "},
{id:2, title: "Камера  ",description: "Ну он прикольный Телефон "},
{id:3, title: "Машина ",description: "Ну он прикольный Телефон "},
{id:4, title: "Что-то еще  ",description: "Ну он прикольный Телефон "}]
  return (
    <Container className="mt-3">
    <Row>
    <Col md={4}>
        <Image width={400} height={300} src={device.img} />
      </Col>
      <Col md={4}>
        <Row className="d-flex flex-column align-items-center">
          <h2 style={{textAlign:'center'}}>{device.name}</h2>
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ background: `url(${bigStar}) no-repeat center center`, width:240,height:240,backgroundSize:'cover', fontSize:64 }}
          >
            {device.rating}
          </div>
        </Row>
      </Col>
      <Col md={4}>
        <Card
        className="d-flex flex-column align-items-center justify-content-around"
        style={{width:300, height:300, fontSize:32, }}
        >
            <h3>{device.price}руб.</h3>
            <Button  variant={"outline-dark"}>Добавить в корзину</Button>
        </Card>
      </Col>
    </Row>
      <Row className="d-flex flex-column m-3">
      <h2>Описание: </h2>
        {description.map(((info,index)=>
        <Row style={{backgroundColor:index % 2 === 0? 'grey':'white' }} key={info.id}>
{info.title}:{info.description}
        </Row>))}
      </Row>
    </Container>
  );
};

export default DevicePage;
