const WhoToFollowListItem = (whotofollow) => {
    return (`
        <li class="list-group-item override-bs">
            <img class="wd-user-img" src=${whotofollow.avatarIcon}>
                <div class="wd-info">
                     <p class="mb-0">${whotofollow.userName} <i class="fa fa-check-circle"></i></p>
                            <p class="wd-grey">@${whotofollow.handle}</p>
                        </div>
                        <div class="wd-follow">
                            <a class="btn btn-primary rounded-pill btn-block ">Follow</a>
                        </div>
        
        </li> 
    `)

}

export default WhoToFollowListItem;