const Profile = ({profile, onEdit}
    ) => {
    return(
        <>
            <div className="col">
                <a href="/tuiter/"><i className="fa fa-arrow-left wd-grey"/></a>
                <span className="ms-2 fw-bold wd-ft">{profile.firstName} {profile.lastName}</span>
                <p className="ms-4 wd-grey">5,196 Tweets</p>
            </div>

            <div>
                <img className="wd-banner w-100" src={profile.banner}/>
                <img className="wd-edit-img" src={profile.avatar}/>
                <button className="btn wd-edit-button btn-block rounded-pill mt-2"
                    onClick={onEdit}>Edit profile</button>

            </div>

            <div>
                <span className="ms-4 fw-bold wd-ft">{profile.firstName} {profile.lastName}</span><br/>
                <span className="ms-4 wd-grey">@{profile.handle}</span>
                <p className="ms-4 mt-2">{profile.bio}</p>
                <p className="ms-4">
                    <i className="fa fa-map-marker-alt me-2"/>{profile.location}
                    <i className="fa fa-birthday-cake ms-3 me-2"/>Born {profile.dateOfBirth}
                    <i className="far fa-calendar-alt ms-3 me-2"/>Joined {profile.dateJoined}
                </p>
                <span className="ms-4 fw-bold">{profile.followingCount}</span>
                <span className="wd-grey"> Following </span>
                <span className="ms-4 fw-bold">{profile.followersCount} </span>
                <span className="wd-grey"> Follwers</span>
            </div>

        </>


    );
}
export default Profile;