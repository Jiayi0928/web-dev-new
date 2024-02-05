const PostItem = (post) => {
    if(post.tile == "" || post.content === "" || post.url == ""){return(`
        
         <li class="list-group-item">
        <div class="wd-left">
            <img class="wd-avatar" src=${post.img}>
        </div>

            <p class="wd-bm-user"><b>${post.username}</b>
                <i class="fa fa-check-circle"></i>
                <span class="wd-bm-handle">@${post.handle} · ${post.time}</span><i class="wd-lightgrey fa fa-ellipsis-h wd-dot"></i>
                </p>
                
                
                
           
        <div class="wd-passage">
            <p class="passage">${post.topic}</p>

        </div>
        
        <div class="wd-border-img wd-below">
            <img class="wd-image-none" src=${post.pic}>
            
        </div>
        
            <div class="row ms-5">
                <div class="col-3 mt-1">
                    <i class="far fa-comment wd-grey"></i>
                    <span class="wd-grey ms-1">${post.comment}</span>
                </div>
                <div class="col-3 mt-1">
                    <i class="fa fa-retweet wd-grey"></i>
                    <span class="wd-grey ms-0">${post.retweet}</span>
                </div>
                <div class="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                    <i class="fa fa-heart wd-grey"></i>
                    <span class="wd-grey">${post.like}</span>
                </div>
                <div class="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                    <i class="fa fa-share wd-grey"></i>
                </div>               
            </div>
            
            



    </li>

    
    `);}
    else{return(`
        
         <li class="list-group-item">
        <div class="wd-left">
            <img class="wd-avatar" src=${post.img}>
        </div>

            <p class="wd-bm-user"><b>${post.username}</b>
            <i class="fa fa-check-circle"></i>
                <span class="wd-bm-handle">@${post.handle} · ${post.time}</span>
                <i class="wd-lightgrey fa fa-ellipsis-h wd-dot"></i>
                </p>
                
        <div class="wd-passage">
            <p class="passage">${post.topic}</p>
            
            

        </div>
        
        <div class="wd-border-img wd-below">
            <img class="wd-image" src=${post.pic}>
            <span class="wd-below-text"><b>${post.title}</b></span>
            <span class="wd-below-text wd-lightgrey below">${post.content}</span>
            <span class="wd-lightgrey wd-below-text">${post.url}</span>
        </div>
        
            <div class="row ms-5">
                <div class="col-3 mt-1">
                    <i class="far fa-comment wd-grey"></i>
                    <span class="wd-grey ms-1">${post.comment}</span>
                </div>
                <div class="col-3 mt-1">
                    <i class="fa fa-retweet wd-grey"></i>
                    <span class="wd-grey ms-0">${post.retweet}</span>
                </div>
                <div class="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                    <i class="fa fa-heart wd-grey"></i>
                    <span class="wd-grey">${post.like}</span>
                </div>
                <div class="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                    <i class="fa fa-share wd-grey"></i>
                </div>               
            </div>



    </li>

    
    `);}
}

export default PostItem;