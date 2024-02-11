import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

const WhatsHappening = () => {
    const profile = useSelector(state => state.profile);
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({
            type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <>
            <div className="d-flex">
                <img className="wd-avatar" src={profile.avatar}/>
                <textarea className="wd-textarea" placeholder="What's happening?" value={whatsHappening} onChange={
                    (event) =>
                        setWhatsHappening(event.target.value)} />
            </div>


            <div className="d-flex">
                <div className="wd-icon-below row d-inline mt-3">
                    <a href="#"><i className="fa fa-image"/></a>
                    <a href="#"><i className="fa fa-chart-line"/></a>
                    <a href="#"><i className="fa fa-smile"/></a>
                    <a href="#"><i className="fa fa-calendar"/></a>
                </div>

                <div className="wd-tuit mt-2 mb-3">
                    <button className="btn btn-primary btn-block rounded-pill " onClick={tuitClickHandler}> Tweet </button>
                </div>
            </div>
        </>
    );
}
export default WhatsHappening;