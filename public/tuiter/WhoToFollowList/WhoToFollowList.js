import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
    <div class="wd-following-list">
        <ul class="list-group"> 

            <li class="list-group-item">
                <p class="wd-who-to-follow">Who to follow</p>
            </li>
            ${
                who.map(w => {
                    return(WhoToFollowListItem(w));
                }).join('')
            }
        <li class="list-group-item override-bs">
             <p class="wd-show-more">Show more</p>
        </li>
        </ul>
        
    </div>
    `);
}

export default WhoToFollowList;