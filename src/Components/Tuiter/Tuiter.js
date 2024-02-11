import React from "react";
import {Link,Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList.js";
import WhoToFollowListItem from "./WhoToFollowList/WhoToFollowListItem.js";
import PostSummaryItem from "./PostSummaryList/PostSummaryItem.js";
import PostSummaryList from "./PostSummaryList/PostSummaryList.js";
import ExploreComponent from "./ExploreScreen/ExploreComponent.js";
import ExploreScreen from "./ExploreScreen/ExploreScreen.js";
import whoReducer from "./reducers/who-reducer";
import postsReducer from "./reducers/posts-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
const reducers = combineReducers({who:whoReducer, posts:postsReducer, tuits:tuitsReducer, profile:profileReducer});

const store = createStore(reducers)
const Tuiter = () => {


    return(
        <Provider store={store} >


        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2 col-xxl-2 col-md-2">
                <NavigationSidebar />
            </div>
            <div className="col-10 col-lg-7 col-xl-6 col-md-10" style={{position:"relative"}}>
                <Outlet />
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 d-none">
                <WhoToFollowList />
            </div>
        </div>
        </Provider>
    );
};
export default Tuiter;