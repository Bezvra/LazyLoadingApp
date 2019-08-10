import { INCREMENT_COUNT_TYPE, DECREMENT_COUNT_TYPE } from '../../Constants/Index';

const initialState = {
    count: 0
};

export function counterReducer(state: any = initialState, action: any = {}) {
    switch (action.type) {
        case INCREMENT_COUNT_TYPE:
            return {
                ...state,
                count: state.count+1
            }
        case DECREMENT_COUNT_TYPE:
            return {
                ...state,
                count: state.count-1
            }
        default:
            return state;
    }
};