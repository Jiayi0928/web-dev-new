import {useState} from "react";
import {useDispatch} from "react-redux";

const EditProfile = ({profile, leaveEdit
    // = {
    // firstName: 'Jiayi',
    // lastName: 'Ma',
    // handle: 'jiayi',
    // bio: "This fake twitter application is my full stack project for the Web Development course.",
    // website: 'youtube.com/webdevtv',
    // location: 'Boston, MA',
    // dateOfBirth: '9/28/1998',
    // dateJoined: '04/2019',
    // followingCount: 312,
    // followersCount: 180,
    // avatar : "./pics/profile.jpg",
    // banner: "./pics/banner.jpg"


// }
}) => {

    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [web, setWeb] = useState(profile.website);
    const [dob, setDob] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();
    const saveProfile = () => {
        dispatch({
            type:'update-profile',
            profile:{
                firstName: firstName,
                lastName: lastName,
                bio: bio,
                location: location,
                web: web,
                dob: dob
            }
        });
        leaveEdit();
    }
    return(

        <>

            <div className="mt-2">


                    <i className='fas fa-times wd-ft wd-grey' onClick={leaveEdit}/>

                <b className="wd-ft wd-white ms-4">Edit Profile</b>

                <button className=" btn wd-save-button btn-block rounded-pill mt-2"
                        onClick={saveProfile}>Save</button>
            </div>

            <div className="mt-4">
                <img className="wd-banner w-100" src={profile.banner}/>
                <img className="wd-edit-img" src={profile.avatar}/>

            </div>

            <form className="form-floating mt-3">
                <input id="lastName"
                       value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="lastName">First Name</label>
            </form>

            <form className="form-floating mt-3">
                <input id="lastName"
                       value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="lastName">Last Name</label>
            </form>

            <form className="form-floating mt-3">
                <input id="bio"
                       value={bio}
                    onChange={(event) => setBio(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="bio">Bio</label>
            </form>

            <form className="form-floating mt-3">
                <input id="location"
                       value={location}
                    onChange={(event) => setLocation(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="location">Location</label>
            </form>

            <form className="form-floating mt-3">
                <input id="web"
                       value={web}
                    onChange={(event) => setWeb(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="web">Website</label>
            </form>

            <form className="form-floating mt-3">
                <input id="dob"
                       value={dob}
                    onChange={(event) => setDob(event.target.value)}
                       className="form-control wd-edit-box"/>
                <label htmlFor="dob">Date of birth</label>
            </form>
        </>
    );
}
export default EditProfile;