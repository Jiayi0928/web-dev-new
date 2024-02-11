// import posts from "./posts.json";
import PostItem from "./PostItem.js";
import {useSelector} from "react-redux";

const PostList = () => {
    const posts = useSelector(state => state.posts);
    return(
        <ul class="list-group">
        
        {
        posts.map(p => {
            return(
                    <PostItem post={p} />
                );
        })
    }
        </ul>
    
    );


};

export default PostList;