import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";
import ExploreComponent from "./ExploreComponent.js";
(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2 col-xxl-2 col-md-2">
                 ${NavigationSidebar('explore')}
            </div>
            <div class="col-10 col-lg-7 col-xl-6 col-md-10">
                ${ExploreComponent()}
            </div>
                
            <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 d-none">
                ${WhoToFollowList()} 
            </div>
        </div> 
    `);
})($);