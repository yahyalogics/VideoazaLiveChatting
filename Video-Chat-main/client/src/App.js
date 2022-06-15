import React , {useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import "antd/dist/antd.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contactus from "./components/Contactus/Contactus";
import Services from "./components/Service/Services";
import Aboutus from "./components/Aboutus/Aboutus";
import Content from "./components/Content/Content";
const App = () => {

  return (

    <Router>

      <Switch>



        <Route path="/Contact" component={Contactus} />
        <Route path="/About" component={Aboutus} />
        <Route path="/Service" component={Services} />
        <Route path="/Login" component={Home} />
        <Route path="/" component={Content} />

      </Switch>

      <Footer />
    </Router>

  );
};

export default App;
