import { lazy } from 'react';

export const Home = lazy(() => import('./Home/Home.Component'));
export const Counter = lazy(() => import('./Counter/Counter.Component'));
export const FetchData = lazy(() => import('./FetchData/FetchData.Component'));