// import tuits from "../tuit-list/tuits.json";
const tuitsReducer = (state = [], action) => {
    switch (action.type){
        case 'FIND_ALL_TUITS':
            return action.tuits;
        case 'DELETE_TUIT':
            return state.filter(t => t._id !== action._id);
        case 'CREATE_TUIT':
            return [action.newTuit, ...state  ]
        case 'UPDATE_TUIT':
            return state.map(
                tuit => tuit._id === action.tuit._id ?
                    action.tuit : tuit);



        default:
            return state
    }
}
// const tuitsReducer = (state = tuits, action) => {
//     switch (action.type){
//         case 'create-tuit':
//             const newTuit = {
//                 tuit: action.tuit,
//                 _id: (new Date()).getTime() + '',
//                 postedBy:{
//                     "username":"Jiayi"
//                 },
//                 handle:"jiayi",
//                 time: "Just now",
//                 logo:"./pics/profile.jpg",
//                 stats:{
//                     retuits: 111,
//                     likes: 222,
//                     replies:333
//                 }
//             }
//             return [
//                 newTuit,
//                 ...state
//             ];
//         case 'delete-tuit':
//             return state.filter(
//                 tuit => tuit._id !== action.tuit._id
//             );
//         case 'like-tuit':
//             return state.map(
//                 tuit => {
//                     if(tuit._id === action.tuit._id){
//                         if(tuit.liked === true){
//                             tuit.liked = false;
//                             tuit.stats.likes--;
//                         } else{
//                             tuit.liked = true;
//                             tuit.stats.likes++;
//                         }
//                         return tuit;
//                     }else{
//                         return tuit;
//                     }
//                 }
//             );
//         default:
//             return tuits
//     }
// }
export default tuitsReducer;