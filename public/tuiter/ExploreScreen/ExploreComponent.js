import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(`
        
        
        <!-- image with overlaid text -->
        <div class="wd-mid">
           <div class="wd-search-section">
                <i class="fa fa-search wd-search-icon"></i>
                <input class="form-control ms-1" placeholder="Search Twitter" type="text"/>
                <i class="fa fa-cog wd-cog"></i>
            </div>
            <div class="mt-3">
            <ul class="nav nav-tabs nav-fill">
                    <li class="nav-item">
                        <a class="nav-link wd-nav active wd-selected-tab" href="for-you.html">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav" href="trending.html">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav" href="news.html">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link wd-nav" href="sports.html">Sports</a>
                    </li>
                    <li class="nav-item d-xxl-block d-xl-block d-lg-block d-sm-none d-none">
                        <a class="nav-link wd-nav" href="entertainment.html">Entertainment</a>
                    </li>

                </ul>
                </div>
                <div class="wd-image-container">
                <img class="wd-image" src="../pics/starship.jpeg">
                <div class="wd-title">SpaceX's Starship</div>
                </div>
                
                ${PostSummaryList()}
            
            </div>
    
    `);
}

export default ExploreComponent;