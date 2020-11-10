import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <div className="copyright">Created by @shrutii25</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Header;
