const PostSummaryItem = (post) => {

    return(`
        <li class="list-group-item override-bs">

             <div class="wd-section-left">
                  <p class="wd-grey mb-0">${post.topic}</p>
                  <p class="wd-user mb-0"><b>${post.userName}</b>
                        <i class="fa fa-check-circle"></i>
                        <span class="wd-grey"> - ${post.time}</span>
                  </p>
                  <p class="wd-grey mb-0">${post.title}</p>
             </div>
             <div class="wd-section-right">
                  <img class="wd-pic" src=${post.image}>
             </div>


        </li>
    
    
    `)

}

export default PostSummaryItem;