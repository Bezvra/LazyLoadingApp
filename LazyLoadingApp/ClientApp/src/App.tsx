import React, { Suspense } from 'react';
import { Route } from 'react-router-dom';
import { Body, Home, Counter, FetchData, ErrorHandler } from './Components/Index';

interface IProps { }

interface IStates { }

export class App extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <ErrorHandler>
                    <Body>
                        <Route exact path='/' component={Home} />
                        <Route path='/counter' component={Counter} />
                        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
                    </Body>
                </ErrorHandler>
            </Suspense>
        );
    }
}