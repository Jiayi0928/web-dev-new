import * as service from "../services/tuits-service.js";

export const findAllTuits = async (dispatch) => {
    const tuits = await service.findAllTuits();
    dispatch({
        type:'FIND_ALL_TUITS',
        tuits
    });
}

export const deleteTuit = async (dispatch, tuit) => {
    const response = await service.deleteTuit(tuit);
    dispatch({
        type:'DELETE_TUIT',
        tuit
    })
}

export const createTuit = async (dispatch, tuit) => {
    const newTuit = await service.createTuit(tuit);
    dispatch({
        type:'CREATE_TUIT',
        newTuit
    })
}

export const updateTuit = async (dispatch, tuit) => {
    const status = await service.updateTuit(tuit);
    dispatch({
        type:'UPDATE_TUIT',
        tuit
    })
}