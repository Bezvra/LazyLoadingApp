import { REQUEST_WEATHER_FORECASTS_TYPE, RECEIVE_WEATHER_FORECASTS_TYPE } from '../../Constants/Index';

const initialState = {
    forecasts: [],
    isLoading: false
};

export function weatherForecastReducer(state: any = initialState, action: any = {}) {
    switch (action.type) {
        case REQUEST_WEATHER_FORECASTS_TYPE:
            return {
                ...state,
                startDateIndex: action.payload.startDateIndex,
                isLoading: true
            }
        case RECEIVE_WEATHER_FORECASTS_TYPE:
            return {
                ...state,
                startDateIndex: action.payload.startDateIndex,
                forecasts: action.payload.forecasts,
                isLoading: false
            }
        default:
            return state;
    }
};
