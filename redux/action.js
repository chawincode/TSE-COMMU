export const SET_JOB = 'SET_JOB';

export const setJob = job => dispatch => {
    dispatch({
        type: SET_JOB,
        payload: job,
    });
};

export const SET_ROOM = {};

export const setRoom = room => dispatch => {
    dispatch({
        type: SET_ROOM,
        payload: room,
    });
};