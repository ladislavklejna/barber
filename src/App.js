import "bootstrap/dist/css/bootstrap.min.css";
import "./Global.css";
import Hero from "./components/Hero/Hero";
import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import About from "./section/About/About";

function App() {
  return (
    <div className="App">
      <Header />

      <Hero />
      <About />
      {/* <Container></Container> */}
    </div>
  );
}

export default App;
