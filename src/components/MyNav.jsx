import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1e8x-RaDYNGjinBHEtS-Ib9BZ1R264X9uMA&s" width="200px" />
      <Nav className="ms-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);
export default MyNav;
