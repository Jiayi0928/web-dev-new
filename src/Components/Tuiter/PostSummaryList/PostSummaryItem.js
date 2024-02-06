const PostSummaryItem = (
    {
        post = {
            topic: "Web Development",
            userName: "",
            title: "jQuery",
            time: "last week",
            image: "./pics/jquery.jpeg",
            tweets: "122K"
    }

    }
) => {

    return(
        <li className="list-group-item override-bs">

             <div className="wd-section-left">
                  <p className="wd-grey mb-0">{post.topic}</p>
                  <p className="wd-user mb-0"><b>{post.userName}</b>
                        <i className="fa fa-check-circle"/>
                        <span className="wd-grey"> - {post.time}</span>
                  </p>
                  <p className="wd-grey mb-0">{post.title}</p>
             </div>
             <div className="wd-section-right">
                  <img className="wd-pic" src={post.image} />
             </div>


        </li>
    
    
    )

}

export default PostSummaryItem;