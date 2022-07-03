import { GET_FACTS } from "../../actionTypes";
const initialState = {
    animals: []
};

export const animalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FACTS:
            return {
                ...state,
                animals: action.payload
            }
        default:
            return state
    }
}

export const loadFacts = (factNumber = 6) => {
    return async dispatch => {
        let url = "https://zoo-animal-api.herokuapp.com/animals/rand/" + factNumber;
        const response = await fetch(url);
        const data = await response.json();
        dispatch({
            type: GET_FACTS,
            payload: data
        })
    }
}