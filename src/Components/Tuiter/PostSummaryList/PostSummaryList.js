import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json";

const PostSummaryList = () => {

    return(
        
        <ul class="list-group">
        
        {
            post.map(p => {
                return (
                    <PostSummaryItem post={p} />
                );
            })
        }
        </ul>
    
    );
}

export default PostSummaryList;