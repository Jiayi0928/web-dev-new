import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./Tuiter/NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "./Tuiter/WhoToFollowList/WhoToFollowList.js";
import WhoToFollowListItem from "./Tuiter/WhoToFollowList/WhoToFollowListItem.js";
import PostSummaryItem from "./Tuiter/PostSummaryList/PostSummaryItem.js";
import PostSummaryList from "./Tuiter/PostSummaryList/PostSummaryList.js";
import ExploreComponent from "./Tuiter/ExploreScreen/ExploreComponent.js";
import ExploreScreen from "./Tuiter/ExploreScreen/ExploreScreen.js";
const Tuiter = () => {
    return(
        <>
            {/*<h1>Tuiter</h1>*/}
            {/*<Link to="/hello">Hello</Link> |<Link to="/labs">Labs</Link>*/}
            {/*<NavigationSidebar active="home"/>*/}
            {/*<WhoToFollowListItem whotofollow={{*/}
            {/*    avatarIcon:"./pics/java.png",*/}
            {/*    userName:"Java",*/}
            {/*    handle:"java"*/}
            {/*}}/>*/}
            {/*<WhoToFollowList />*/}
            {/*<PostSummaryItem />*/}
            {/*<PostSummaryList />*/}
            {/*<ExploreComponent />*/}
            <ExploreScreen />
        </>
    )
};
export default Tuiter;