import { SET_JOB, SET_ROOM } from "./action";

const initialState = {
    job: '',
    room: {}
}

function userReducer(state=initialState, action){
    switch (action.type) {
        case SET_JOB:
            return {...state, job: action.payload};
        case SET_ROOM:
            return {...state, room: action.payload};
        default:
            return state;
    }
}

export default userReducer;