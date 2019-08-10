import { combineReducers } from 'redux';
import { counterReducer } from './Counter.Reducer';
import { weatherForecastReducer } from './WeatherForecasts.Reducer';

export const rootReducer = combineReducers({
    counter: counterReducer,
    weatherForecast: weatherForecastReducer
});