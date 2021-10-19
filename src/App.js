import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Notfound from "./components/Notfound/Notfound";
import Serv from "./components/Services/Home/Serv";
import Page from "./components/Page/Page";
import Description from "./components/Description/Description";
// import Login from "./components/Login/firebase/Login/Login";
import Header from "./components/Shared/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/about";
import AuthProvider from "./components/contexts/AuthProvider";
import Login from "./components/Login/Login/Login";
import SignUp from "./components/Login/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Page></Page>
            </Route>
            <Route exact path="/serv">
              <Serv></Serv>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/signup">
              <SignUp></SignUp>
            </Route>
            <Route path="/Description/:serviceId">
              <Description></Description>
            </Route>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
