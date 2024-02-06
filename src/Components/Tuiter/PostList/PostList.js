import posts from "./posts.json";
import PostItem from "./PostItem.js";

const PostList = () => {
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