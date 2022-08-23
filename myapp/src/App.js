import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import { ToastContainer } from 'react-toastify';
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import LiveCamera from "./Pages/LiveCamera";
import News from "./Pages/News";
import Photos from "./Pages/Photos";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>


      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/news' component={News}/>
        <Route  exact path='/live' component={LiveCamera} />
        <Route  exact path='/photos' component={Photos} />
        <Route  exact path='/contact' component={Contact} />


      </Switch>
     
      <Footer />


    </>
  );
}

export default App;
