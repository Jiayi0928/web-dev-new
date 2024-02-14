import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
    return(
        <div className="wd-mid">
           <div className="wd-search-section">
                <i className="fa fa-search wd-search-icon"/>
                <input className="form-control ms-1" placeholder="Search Twitter" type="text"/>
                <i className="fa fa-cog wd-cog"/>
            </div>
            <div className="mt-3">
            <ul className="nav nav-tabs nav-fill">
                    <li className="nav-item">
                        <a className="nav-link wd-nav active wd-selected-tab" href="for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-nav" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-nav" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link wd-nav" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-xxl-block d-xl-block d-lg-block d-sm-none d-none">
                        <a className="nav-link wd-nav" href="entertainment.html">Entertainment</a>
                    </li>

                </ul>
                </div>
                <div className="wd-image-container">
                <img className="wd-image" src="./pics/starship.jpeg"/>
                <div className="wd-title">SpaceX's Starship</div>
                </div>
                
                <PostSummaryList />
            
            </div>
    
    );
}

export default ExploreComponent;