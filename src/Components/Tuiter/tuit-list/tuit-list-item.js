import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../../../actions/tuits-actions";

const TuitListItem = (
    {

                      post
                      //     ={
                      //     img: "./pics/elonmusk.jpeg",
                      //     postedBy:{
                      //         username: "Elon Musk"
                      //     }
                      //    ,
                      //     handle:"elonmusk",
                      //     time:"23h",
                      //     topic: "Amazing show about <a href='https://twitter.com/inspiration4x' style='text-decoration: none'>@Inspiration4x</a> mission!",
                      //     pic: "../pics/elonmusknews.jpeg",
                      //     title: "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
                      //     content: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
                      //     url: "<i className=\"fa fa-link\"></i><a className=\"wd-grey\" href=\"https://www.netflix.com/title/81441273\" style=\"text-decoration: none\" > netflix.com</a>",
                      //     comment: "4.2k",
                      //     retweet: "3.5k",
                      //     like: "37.5k"
                      // }

                  }) => {

    const dispatch = useDispatch();
    // const deleteTuit = (tuit) => {
    //     dispatch({type:'delete-tuit', tuit})
    // };
        return(

            <li className="list-group-item">
                <div className="wd-left">
                    <img className="wd-avatar" src={post.logo} />
                </div>

               <p className="wd-bm-user"><b>{post.username}</b>
                    &nbsp;<i className="fa fa-check-circle"/>
                    &nbsp;<span className="wd-bm-handle">@{post.handle} · {post.time}</span>
                    <i onClick={() => deleteTuit(dispatch, post)} className="fas fa-times fa-2x fa-pull-right"/>
                </p>


                {/*<div className="wd-passage">*/}
                {/*    <p className="passage" dangerouslySetInnerHTML={{__html:post.topic}} />*/}

                {/*</div>*/}


                <div className="wd-below">

                        {/*<img className="wd-image" src={post.pic} />*/}

                    <p className="wd-below-text">{post.tuit}</p>






                            {/*<p className="wd-grey">*/}
                            {/*    <i className="fa fa-link"/>*/}
                            {/*    <span className="wd-below-text" dangerouslySetInnerHTML={{__html: post.url}}/>*/}
                            {/*</p>*/}



                        <div>
                            {post.attachments && post.attachments.image &&
                                <img className="wd-image-none" src={post.attachments.image} alt=''/>
                            }
                            {post.attachments && post.attachments.video &&
                                <iframe height="350px" className="wd-image-none" src={'https://www.youtube.com/embed/' + post.attachments.video}/>
                            }
                        </div>



                </div>

                <div className="row ms-5">
                    <div className="col-3 mt-1">
                        <i className="far fa-comment wd-grey"/>
                        <span className="wd-grey ms-1">{post.comments}</span>
                    </div>
                    <div className="col-3 mt-1">
                        <i className="fa fa-retweet wd-grey"/>
                        <span className="wd-grey ms-0">{post.retuits}</span>
                    </div>
                    <div className="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                        {/*<i className="fa fa-heart wd-red"/>*/}
                        {/*<span class="wd-grey">{post.stats.likes}</span>*/}
                        <TuitStats tuit={post}/>
                    </div>
                    <div className="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                        <i className="fa fa-share wd-grey"/>
                    </div>
                </div>



            </li>
            )


};

export default TuitListItem;