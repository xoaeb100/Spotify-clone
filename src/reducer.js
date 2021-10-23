export const initialState={
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // 💯 after debugging comment this out!! 👇
    // token:'BQD6ZFijL6MuG3m0inRDmthD5MGJOHZ6gIvOfK5UkQ9dGK-K4w6VwmsXhppi8wGlSQg0VPvflOV-TEzp8zCe9rDte4aMHQu5GVLbsU-QHrhduvAEcAGHUt7LbifeSR6pa3krm7g7MMHHrhlSizpwXJHsem7F0Dr6fy4xC6zEzqLRS72f',

};

const reducer =(state, action)=>{
    console.log(action);
    // reducer waits for action to happen
    // action has a type and payload
    // type is set_user payload is user
    switch (action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user,
                // this takes this existing property and change user to current action.user
            };
        case "SET_TOKEN":
            return{
                ...state,
                token:action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
                // 👆 now the datalayer is full of playlists
            };

            case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly:action.discover_weekly,
                }

        default:
            return state;
            
    }
}
export default reducer;