import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
    <div className="wd-following-list">
        <ul className="list-group">

            <li className="list-group-item">
                <p className="wd-who-to-follow">Who to follow</p>
            </li>
            {
                who.map(w => {
                    return(
                        <WhoToFollowListItem whotofollow={w}/>
                    );
                })
            }
        <li className="list-group-item override-bs">
             <p className="wd-show-more">Show more</p>
        </li>
        </ul>
        
    </div>
    );
}

export default WhoToFollowList;