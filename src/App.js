import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import Home from "./pages/Home";

import Register from "./pages/RegisterL";
import { Routes, Route } from "react-router-dom";

import "./styles/style.scss";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/register" exact element={<Register />}component={Register} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
