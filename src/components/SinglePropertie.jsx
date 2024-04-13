import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export const SinglePropertie = ({id,sellerName,category,rooms,area,imageUrl,createAt}) => {
  console.log(sellerName);
  return (
    <div>
      <Card key={id}
        style={{
          width: "18rem",
          height: "100%"
        }}
      >
        <img alt="kep" src={imageUrl}/>
        <CardBody style={{display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
          <CardTitle tag="h5">{category}</CardTitle>
          <CardText>
            A hirdetés feladásának dátuma: {createAt}
          </CardText>
          <CardText>
            Szobák száma {rooms}
          </CardText>
          <CardText>
            Alapterület {area}
          </CardText>
          <Button style={{background: "grey"}}>Eladó: {sellerName}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

