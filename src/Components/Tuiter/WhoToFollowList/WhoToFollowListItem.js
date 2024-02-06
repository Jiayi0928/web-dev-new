const WhoToFollowListItem = (
    {
        whotofollow ={
            avatarIcon:"./pics/nasa.jpg",
            userName:"NASA",
            handle:"nasa",
        }
    }) => {
    return (

        <li className="list-group-item override-bs">
            <img className="wd-user-img" src={whotofollow.avatarIcon} />
                <div className="wd-info">
                     <p className="mb-0">{whotofollow.userName} <i className="fa fa-check-circle"/></p>
                            <p className="wd-grey">@{whotofollow.handle}</p>
                        </div>
                        <div className="wd-follow">
                            <a className="btn btn-primary rounded-pill btn-block ">Follow</a>
                        </div>
        
        </li>

    )

}

export default WhoToFollowListItem;