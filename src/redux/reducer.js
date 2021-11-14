import {DISHES} from '../shared/dishesh';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import {COMMENTS} from '../shared/comments';

export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}

export const Reducer = (state = initialState, action) => {
    return state;
};
