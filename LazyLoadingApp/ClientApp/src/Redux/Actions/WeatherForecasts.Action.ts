import { Dispatch } from "redux";
import { REQUEST_WEATHER_FORECASTS_TYPE, RECEIVE_WEATHER_FORECASTS_TYPE } from '../../Constants/Index';

const request = (payload: any) => ({
    type: REQUEST_WEATHER_FORECASTS_TYPE,
    payload
});

const receive = (payload: any) => ({
    type: RECEIVE_WEATHER_FORECASTS_TYPE,
    payload
});

export const requestWeatherForecasts = (startDateIndex: any, onSuccess?: Function) => async (dispatch: Dispatch, getState: Function) => {
    const state = getState();
    
    if (startDateIndex === state.weatherForecasts && state.weatherForecasts.startDateIndex) {
        // Don't issue a duplicate request (we already have or are loading the requested data)
        return;
    }

    dispatch(request({ startDateIndex }));

    const url = `api/SampleData/WeatherForecasts?startDateIndex=${startDateIndex}`;
    const response = await fetch(url);
    const forecasts = await response.json();

    dispatch(receive({ startDateIndex, forecasts }));

    onSuccess && onSuccess();
}