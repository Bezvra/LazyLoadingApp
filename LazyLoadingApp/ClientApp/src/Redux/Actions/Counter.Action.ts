import { Dispatch } from "redux";
import { INCREMENT_COUNT_TYPE, DECREMENT_COUNT_TYPE } from '../../Constants/Index';

const updateIncrement = () => ({
    type: INCREMENT_COUNT_TYPE
});

const updateDecrement = () => ({
    type: DECREMENT_COUNT_TYPE
});

export const increment = () => async (dispatch: Dispatch, getState: Function) =>  { dispatch(updateIncrement()); }

export const decrement = () => async (dispatch: Dispatch, getState: Function) =>  { dispatch(updateDecrement()); }