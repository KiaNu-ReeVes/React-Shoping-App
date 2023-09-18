import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function IndexPage() {
  const [showModal, setShowModal] = useState(false);

  const isLogin = false;

  const itemShop = [
    {
      name: "Airpod Pro",
      image: "/image/airpodpro.webp",
      desc: "This headphone is very strange because it has a battery but it works without a battery. This written text is only for testing",
    },
    {
      name: "Sony Sovellus",
      image: "/image/sonysovellus.webp",
      desc: "This headphone is very strange because it has a battery but it works without a battery. This written text is only for testing",
    },
    {
      name: "Sony WH-CH720N",
      image: "/image/WH-CH720N.webp",
      desc: "This headphone is very strange because it has a battery but it works without a battery. This written text is only for testing",
    },
    {
      name: "Nice Headphone",
      image: "/image/Wireless.webp",
      desc: "This headphone is very strange because it has a battery but it works without a battery. This written text is only for testing",
    },
  ];

  function buyitemHandler() {
    if (isLogin) {
      // اقدامات برای خرید کالا
    } else {
      setShowModal(true);
    }
  }

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12 fs-1 fw-bold py-4">Item Shop</div>
      </div>
      <div className="row">
        {itemShop.map((item, index) => (
          <div
            key={index}
            className="card col-3 text-center justify-content-center p-3"
          >
            <img
              src={item.image}
              className="card-img-top custom-imgsize"
              alt={item.name}
            ></img>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.desc}</p>
              <div onClick={buyitemHandler} className="btn btn-primary">
                Buy Item
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)} 
        backdrop="static"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your Password"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default IndexPage;
