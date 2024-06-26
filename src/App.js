import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";
import Hero from "./components/Hero/Hero";
import { Container } from "reactstrap";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <Hero />
      </Container>
    </div>
  );
}

export default App;
