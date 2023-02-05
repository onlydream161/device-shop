import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "../index";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className="d-flex">
      {device.brand.map((brand) => (
        <Card
          className="mt-3 p-2"
          key={brand.id}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => {
            device.setSelectedBrand(brand);
          }}
          style={{ width: 100, marginRight: 5, cursor: "pointer" }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
