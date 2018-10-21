import { createActions } from 'redux-actions';

export const {
    requestAdvice,
    responseAdviceFailure,
    responseAdviceSuccess,
} = createActions(
    {},
    'REQUEST_ADVICE',
    'RESPONSE_ADVICE_FAILURE',
    'RESPONSE_ADVICE_SUCCESS',
);


export const getRandomAdvice = (randomAdvice) => (dispatch) => {
    dispatch(requestAdvice());
    if(randomAdvice){
        return fetch(
            `http://api.adviceslip.com/advice/search/${randomAdvice}`,
            {
                method: 'GET',
            }
        ).then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                return dispatch(responseAdviceFailure());
            }
        })
        .then(json => {
            return dispatch(responseAdviceSuccess(json.slips[0].advice));
        })
        .catch(e => {
            console.log("ERROR FETCHING", e);
            return dispatch(responseAdviceFailure());
        })
    } else {
        return fetch(
            'http://api.adviceslip.com/advice',
            {
                method: 'GET',
            }
        ).then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                return dispatch(responseAdviceFailure());
            }
        })
        .then(json => {
            return dispatch(responseAdviceSuccess(json.slip.advice));
        })
        .catch(e => {
            console.log("ERROR FETCHING", e);
            return dispatch(responseAdviceFailure());
        })
    }
}