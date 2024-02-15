import React, {useEffect} from "react";
import tuits from "./tuits.json";
import {useSelector, useDispatch} from "react-redux";
import TuitListItem from "./tuit-list-item";
import {findAllTuits} from "../../../actions/tuits-actions";

const TuitList = () => {

    const tuits = useSelector(state => state.tuits);

    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch),[tuits]);

    // useEffect(() =>
    //         findAllTuits(dispatch),
    //     [dispatch]);
    return(
        <ul className="list-group">
            {

                tuits.map && tuits.map(tuit =>
                <TuitListItem key={tuit._id}
                                post = {tuit}/>)
            }

        </ul>

    );
}

export default TuitList;