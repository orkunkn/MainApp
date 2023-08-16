export const SET_USER_NAME = 'SET_USER_NAME';
export const GET_CITIES = "GET_CITIES";

const API_URL = 'https://mocki.io/v1/396261e8-45a8-4487-a10f-72c69f46acd1';

export const getCities = () => {
    try {
        return async dispatch => {
            const result = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await result.json();
            if (json) {
                dispatch({
                    type: GET_CITIES,
                    payload: json
                });
            } else {
                console.log('Unable to fetch!')
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export const setName = name => dispatch => {
    dispatch({
        type: SET_USER_NAME,
        payload: name
    })
}