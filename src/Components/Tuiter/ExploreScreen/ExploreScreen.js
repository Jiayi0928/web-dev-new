import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";
import React from "react";
const ExploreScreen = () => {

    return(
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2 col-xxl-2 col-md-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 col-md-10" style={{position:"relative"}}>
                <ExploreComponent />
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 d-none">
                <WhoToFollowList />
            </div>
        </div>
    );
};
export default ExploreScreen;