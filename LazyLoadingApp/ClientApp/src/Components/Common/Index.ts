import { lazy } from 'react';

export const Cell = lazy(() => import('./Cell/Cell.Component'));
export const Row = lazy(() => import('./Row/Row.Component'));
export const Body = lazy(() => import('./Body/Body.Component'));
export const Loader = lazy(() => import('./Loader/Loader.Component'));
export const Button = lazy(() => import('./Button/Button.Component'));
export const Text = lazy(() => import('./Text/Text.Component'));
export const BottomBar = lazy(() => import('./BottomBar/BottomBar.Component'));
export const ErrorHandler = lazy(() => import('./ErrorHandler/ErrorHandler.Component'));