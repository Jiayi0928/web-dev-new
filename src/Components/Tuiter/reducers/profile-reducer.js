import profileJson from "../ProfileScreen/profile.json";


const ProfileReducer = (state = profileJson, action) => {
    switch(action.type){
        case'update-profile':
            return {...profileJson, ...action.profile};  // In a situation where one key has another property, the last property overrides the first instance
            // action.profile中的内容会覆盖掉profileJson中同样的
        default:
            return state;
    }
}
export default ProfileReducer;