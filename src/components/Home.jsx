import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export const Home = () => {
  return (
    <div className="container">
      <header>
        <h1>Ingatlaniroda</h1>
      </header>
      <main className="row">
        <div className="col-12 col-md-4">
          <h4>Ingatlanok minden kategóriában</h4>
        </div>
        <div className="row col-md-4 col-12 home-image">
          <Card >
            <img alt="haz" src="haz.jpg" />
            <CardBody>
              <CardTitle tag="h5">Házak</CardTitle>
            </CardBody>
          </Card>
          <Card>
            <img alt="lakas" src="panel.jpg" />
            <CardBody>
              <CardTitle tag="h5">Lakások</CardTitle>
            </CardBody>
          </Card>
          <Card>
            <img alt="nyaralo" src="nyaralo.jpg" />
            <CardBody>
              <CardTitle tag="h5">Nyaralók</CardTitle>
            </CardBody>
          </Card>
        </div>
      </main>
      <footer>
        ©2024 JF project. All rights reserved.
      </footer>
    </div>
  );
};
