import React from "react";
import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = ({active = 'home'}) => {
    const {pathname} = useLocation();
    return(
        <div className="list-group">
            <li className="list-group-item">


            <Link to="/" className="list-group-item-action">
                    <i className="fab fa-twitter wd-bird"/>
            </Link>
            </li>

            <li className={`list-group-item-action list-group-item  ${(pathname === '/tuiter/home' || pathname === '/tuiter/') ? 'active':''}`}>
                <Link to="/tuiter/home" className="list-group-item-action text-decoration-none">
                    <div className="row">
                        <div className="col-1">
                            <i className="fa fa-home"/>
                        </div>
                        <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Home</div>
                    </div>
                </Link>

            </li>

            <li className={`list-group-item-action  list-group-item  ${pathname === '/tuiter/explore' ? 'active':''}`}>
                <Link to="/tuiter/explore" className="list-group-item-action text-decoration-none">
        <div className="row">
            <div className="col-1">
                <i className="fa fa-hashtag"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Explore</div>
        </div>
    </Link>
            </li>



            <li className={`list-group-item-action list-group-item  ${active === 'notifications' ? 'active':''}`}>
                <a href="#" className="list-group-item-action text-decoration-none">
        <div className="row">
            <div className="col-1">
                <i className="fa fa-bell"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div>
        </div>
                </a></li>


                <li className={`list-group-item-action list-group-item  ${active === 'messages' ? 'active':''}`}>
                    <a href="#" className="list-group-item-action text-decoration-none">
        <div className="row">
            <div className="col-1">
                <i className="fa fa-envelope"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Messages</div>
        </div>
                    </a></li>

                    <li className={`list-group-item-action list-group-item  ${active === 'bookmarks' ? 'active':''}`}>
                        <a href="#" className="list-group-item-action text-decoration-none">

        <div className="row">
            <div className="col-1">
                <i className="fa fa-bookmark"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div>
        </div>
                        </a></li>

            <li className={`list-group-item-action list-group-item  ${active === 'lists' ? 'active':''}`}>
                <a href="#" className="list-group-item-action text-decoration-none">
        <div className="row">
            <div className="col-1">
                <i className="fa fa-list-ul"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Lists</div>
        </div>
                </a></li>

                <li className={`list-group-item-action list-group-item  ${pathname === '/tuiter/profile' ? 'active':''}`}>
                    <a href="/tuiter/profile" className="list-group-item-action text-decoration-none">

        <div className="row">
            <div className="col-1">
                <i className="fa fa-user"/>
            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Profile</div>
        </div>
                    </a></li>


            <li className={`list-group-item-action list-group-item  ${active === 'more' ? 'active':''}`}>
                <a href="#" className="list-group-item-action text-decoration-none">
        <div className="row">
            <div className="col-1">

                    <span className="fa-stack" style={{fontSize : "0.5em"}}>
                        <i className="fa fa-circle fa-stack-2x"/>
                        <i className="fa fa-ellipsis-h fa-inverse fa-stack-1x"/>
                    </span>

            </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">More</div>
        </div>



                </a></li>


    <a href="#" className="btn btn-primary btn-block rounded-pill mt-2">Tweet</a>



</div>

);
}
export default NavigationSidebar;