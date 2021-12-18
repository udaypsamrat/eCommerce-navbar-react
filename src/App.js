import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from "./components/ContactUs/ContactUs";
import About from "./components/About/About";
// Men Header
import TopWear from "./components/Men/TopWear/TopWear";
import MenFootwear from "./components/Men/MenFootwear/MenFootwear";
import InnerSleep from "./components/Men/InnerSleep/InnerSleep";
import SleepWear from "./components/Men/SleepWear/SleepWear";
import BottomWear from "./components/Men/BottomWear/BottomWear";
//kids header
import BoysGirls from "./components/Kids/BoysGirls/BoysGirls";
import BabyCare from "./components/Kids/BabyCare/BabyCare";
import Toys from "./components/Kids/Toys/Toys";

//Electronics Header
import Mobiles from "./containers/Electronics/Mobiles/Mobiles";
import Laptops from "./containers/Electronics/Laptops/Laptops";
import Tevelisions from "./containers/Electronics/Tevelisions/Tevelisions";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        {" "}
        <Route path="/about" component={About} />
        <Route path="/ContactUs" component={ContactUs} />
        {/* Men */}
        <Route path="/men/topwear" component={TopWear} />
        <Route path="/men/menfootwear" component={MenFootwear} />
        <Route path="/men/innersleep" component={InnerSleep} />
        <Route path="/men/sleepwear" component={SleepWear} />
        <Route path="/men/bottomwear" component={BottomWear} />
        {/* kids */}
        <Route path="/kids/babycare" component={BabyCare} />
        <Route path="/kids/boysandgirls" component={BoysGirls} />
        <Route path="/kids/toys" component={Toys} />
        {/* Electronics  */}
        <Route path="/electronics/mobiles" component={Mobiles} />
        <Route path="/electronics/laptops" component={Laptops} />
        <Route path="/electronics/tevelisions" component={Tevelisions} />
      </Switch>
    </Router>
  );
}

export default App;
