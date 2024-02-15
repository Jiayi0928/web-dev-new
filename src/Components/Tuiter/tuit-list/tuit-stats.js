import {useDispatch} from "react-redux";
import{updateTuit} from "../../../actions/tuits-actions";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
    };

    // let likes = tuit.likes
    // const likeTuit = () => {
    //     if(tuit.liked){
    //         likes--;
    //     }else{
    //         likes++;
    //     }
    //     tuit.liked = !tuit.liked;
    //
    //     updateTuit(dispatch,{
    //         ...tuit,
    //         likes
    //     })
    // }
    return (
        <span>
        {
            tuit.liked &&
            <i className="fas fa-heart me-1" style={{color: 'red'}}
                onClick={() => updateTuit(dispatch, {
                    ...tuit,
                    liked: false,
                    likes: tuit.likes -1
                })}/>}
            {
                !tuit.liked &&
                <i className="far fa-heart me-1"
                    onClick={() => updateTuit(dispatch, {
                        ...tuit,
                        liked: true,
                        likes: tuit.likes + 1
                    })}/>
            }

            <span className="wd-grey">{tuit.likes}</span>
    </span>
    );
};

export default TuitStats;