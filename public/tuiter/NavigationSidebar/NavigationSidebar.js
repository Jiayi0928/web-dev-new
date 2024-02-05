const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <!-- continue the rest of the list --> 
            <a href="#" class="list-group-item icon list-group-item-action">
                    <i class="fab fa-twitter wd-bird"></i>
            </a>
            
             ${active === 'home' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}
            <a href="../HomeScreen/home.html" class="list-group-item-action text-decoration-none">
                    <div class="row">
                        <div class="col-1">
                            <i class="fa fa-home"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Home</div>
                    </div>
                </a>
                </li>
               
                
                ${active === 'explore' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}
            <a href="#" class="list-group-item-action text-decoration-none">
            <div class="row">
                        <div class="col-1">
                            <i class="fa fa-hashtag"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Explore</div>
                    </div>
                </a>
                </li>
                
               
                 ${active === 'notifications' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">           
                <div class="row">
                        <div class="col-1">
                        <i class="fa fa-bell"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div>
                </div>
                </a></li>
                    
                    
                ${active === 'messages' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">  
                <div class="row">
                        <div class="col-1">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Messages</div>
                    </div>
                </a></li>
                
                ${active === 'bookmarks' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">  
                <div class="row">
                        <div class="col-1">
                        <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div>
                </div>               
                </a></li>
                
                ${active === 'lists' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">  
                    <div class="row">
                        <div class="col-1">
                        <i class="fa fa-list-ul"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Lists</div>
                    </div>
                </a></li>
                
                ${active === 'profile' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">  
                    <div class="row">
                        <div class="col-1">
                        <i class="fa fa-user"></i>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Profile</div>
                    </div>
                </a></li>

                ${active === 'more' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item icon list-group-item-action">`}               
                <a href="#" class="list-group-item-action text-decoration-none">  
                    <div class="row">
                        <div class="col-1">
                        <span class="fa-stack" style="font-size: 0.5em;">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                </span>
                        </div>
                        <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">More</div>
                    </div>
                

                    
                    </a></li>
                    
                 <a href="#" class="btn btn-primary btn-block rounded-pill mt-2">Tweet</a>


        </div>
`);
}
export default NavigationSidebar;