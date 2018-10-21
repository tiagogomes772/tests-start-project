import { handleActions } from 'redux-actions';

const initialState = {
    fetching: false,
    randomAdvice: null,
}

const Reducer = handleActions({
    REQUEST_ADVICE: (state) => {
        const newState = Object.assign({}, state);
        newState.fetching = true;
        return newState;
    },
    RESPONSE_ADVICE_FAILURE: (state) => {
        const newState = Object.assign({}, state);
        newState.fetching = false;
        return newState;
    },
    RESPONSE_ADVICE_SUCCESS: (state, action) => {
        const newState = Object.assign({}, state);
        newState.fetching = false;
        newState.randomAdvice = action.payload;
        return newState;
    },
    },
    initialState,
);

export default Reducer;