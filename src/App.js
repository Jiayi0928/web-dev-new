import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./Components/HelloWorld.js";
import {BrowserRouter, Route} from "react-router-dom";
import Labs from "./Labs/Labs.js";
import Tuiter from "./Components/Tuiter.js";
import ExploreScreen from "./Components/Tuiter/ExploreScreen/ExploreScreen.js";
import HomeScreen from "./Components/Tuiter/HomeScreen/HomeScreen.js";

const App =()=> {
  return (
      <BrowserRouter>

      <div className="container">

            <Route path="/hello" exact={true}>
                <HelloWorld />
            </Route>


          <Route path={["/", "/labs"]} exact={true}>
              <Labs />
          </Route>

          <Route path="/tuiter" exact={true}>
              <Tuiter />
          </Route>

          <Route path="/tuiter/explore" exact={true}>
              <ExploreScreen />
          </Route>

          <Route path="/tuiter/home" exact={true}>
              <HomeScreen />
          </Route>

      </div>
      </BrowserRouter>
  );
}

export default App;
