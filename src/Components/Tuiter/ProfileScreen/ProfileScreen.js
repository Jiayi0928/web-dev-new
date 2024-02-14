import EditProfile from "./EditProfile";
import {useSelector} from "react-redux";
import {useState} from "react";
import Profile from "./Profile";

const ProfileScreen = () => {

    const profile = useSelector(state => state.profile);
    // const [editing, setEditing] = useState(true);
    const [editing, setEditing] = useState(false);
    return(


        <>
            {/*<ProfileScreen />*/}

            {editing ?  <EditProfile profile={profile} leaveEdit={()=>setEditing(false)}/> : <Profile profile={profile} onEdit={() => setEditing(true)}/>}

        </>
    );

}
export default ProfileScreen;