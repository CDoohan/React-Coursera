import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

export const initialState = {
    dishes : DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

// CANNOT MODIFY THE STATE IN THE REDUCER
// CAN ONLY DO AN IMMUTABLE CHANGE AND RETURN AN UPDATED VERSION OF THE STATE FROM THIS REDUCER
export const Reducer = ( state = initialState , action) => {
    return state;
}