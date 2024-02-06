import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import PostList from "../PostList/PostList.js";


const HomeScreen = () => {


    return(

        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2 col-xxl-2 col-md-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6 col-md-10">
                <PostList />
            </div>

            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-xxl-4 d-none">
                <PostSummaryList />
            </div>
        </div>
    );
};

export default HomeScreen;
