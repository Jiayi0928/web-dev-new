const PostItem = ({

                      post ={
                          img: "./pics/elonmusk.jpeg",
                          username: "Elon Musk",
                          handle:"elonmusk",
                          time:"23h",
                          topic: "Amazing show about <a href='https://twitter.com/inspiration4x' style='text-decoration: none'>@Inspiration4x</a> mission!",
                          pic: "../pics/elonmusknews.jpeg",
                          title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                          content: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                          url: "<i class=\"fa fa-link\"></i><a class=\"wd-grey\" href=\"https://www.netflix.com/title/81441273\" style=\"text-decoration: none\" > netflix.com</a>",
                          comment: "4.2k",
                          retweet: "3.5k",
                          like: "37.5k"
                      }

                  }) => {

        return(

            <li className="list-group-item">
                <div className="wd-left">
                    <img className="wd-avatar" src={post.img} />
                </div>

                <p className="wd-bm-user"><b>{post.username}</b>
                    &nbsp;<i className="fa fa-check-circle"/>
                    &nbsp;<span className="wd-bm-handle">@{post.handle} · {post.time}</span>
                    <i className="wd-lightgrey fa fa-ellipsis-h wd-dot"/>
                </p>

                <div className="wd-passage">
                    <p className="passage" dangerouslySetInnerHTML={{__html:post.topic}} />

                </div>

                <div className="wd-border-img wd-below">
                    {post.title && post.content && post.url ?
                        <img className="wd-image" src={post.pic} />
                        :<img className="wd-image-none" src={post.pic} />
                    }
                    {post.title && post.content && post.url ?
                        <div>
                        <p className="wd-below-text"><b>{post.title}</b></p>
                        <p className="wd-below-text wd-lightgrey below">{post.content}</p>

                            <p className="wd-grey">
                                <i className="fa fa-link"/>
                                <span className="wd-below-text" dangerouslySetInnerHTML={{__html:post.url}} />
                            </p>

                        </div>
                        :""
                    }


                </div>

                <div className="row ms-5">
                    <div className="col-3 mt-1">
                        <i className="far fa-comment wd-grey"/>
                        <span className="wd-grey ms-1">{post.comment}</span>
                    </div>
                    <div className="col-3 mt-1">
                        <i className="fa fa-retweet wd-grey"/>
                        <span className="wd-grey ms-0">{post.retweet}</span>
                    </div>
                    <div className="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                        <i className="fa fa-heart wd-grey"/>
                        <span class="wd-grey">{post.like}</span>
                    </div>
                    <div class="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                        <i class="fa fa-share wd-grey"/>
                    </div>
                </div>



            </li>
            )


};

export default PostItem;