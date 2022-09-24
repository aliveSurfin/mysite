import "./App.scss";
import Main from "./comps/Main/Main";
import Footer from "./comps/Footer/Footer";
import Header from "./comps/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
