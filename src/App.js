import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './explore.css';
import HelloWorld from "./Components/HelloWorld.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Labs from "./Components/Labs/Labs.js";
import Tuiter from "./Components/Tuiter/Tuiter.js";
import ExploreScreen from "./Components/Tuiter/ExploreScreen/ExploreScreen.js";
import HomeScreen from "./Components/Tuiter/home-screen/home-screen.js";
import Profile from "./Components/Tuiter/ProfileScreen/Profile";
import ProfileScreen from "./Components/Tuiter/ProfileScreen/ProfileScreen";

const App =()=> {
  return (
      <BrowserRouter>

        <div className="container">
            <Routes>
                <Route path = "/">
                    <Route index element={<Labs />} />
                    <Route path="labs" element={<Labs />}/>
                    <Route path="hello" element={<HelloWorld />}/>
                    <Route path="tuiter" element={<Tuiter />}>
                        <Route index element={<HomeScreen />}/>
                        <Route path="home" element={<HomeScreen />}/>
                        <Route path="explore" element={<ExploreScreen />}/>
                        <Route path="profile" element={<ProfileScreen />}/>
                    </Route>



            {/*<Route path="/hello" exact={true}>*/}
            {/*    <HelloWorld />*/}
            {/*</Route>*/}


          {/*<Route path={["/", "/labs"]} exact={true}>*/}
          {/*    <Labs />*/}
          {/*</Route>*/}

          {/*<Route path="/tuiter" exact={true}>*/}
          {/*    <Tuiter />*/}
          {/*</Route>*/}

          {/*<Route path="/tuiter/explore" exact={true}>*/}
          {/*    <ExploreScreen />*/}
          {/*</Route>*/}

          {/*<Route path="/tuiter/home" exact={true}>*/}
          {/*    <HomeScreen />*/}
          {/*</Route>*/}
                </Route>
            </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
