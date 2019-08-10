import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import fetchDataStyles from './FetchData.module.scss';
import { Cell, Row, Button, Text } from '../../Index';
import { requestWeatherForecasts } from '../../../Redux/Actions/Index';
import { getWeatherForecasts } from '../../../Redux/Selectors/Index';

interface IProps {
    forecasts: any,
    requestWeatherForecasts: Function,
    startDateIndex: number,
    history: {
        push: (url: any) => void
    },
}

interface IStates { }

class FetchDataComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);

        //Bindings
        this.ensureDataFetched = this.ensureDataFetched.bind(this);
        this.renderForecastsTable = this.renderForecastsTable.bind(this);
        this.renderPagination = this.renderPagination.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        // This method is called when the component is first added to the document
        this.ensureDataFetched();
    }

    componentDidUpdate(prevProps: any) {
        // This method is called when the route parameters change
        if(prevProps.startDateIndex !== this.props.startDateIndex){
            this.ensureDataFetched();
        }
    }

    ensureDataFetched() {
        const { startDateIndex, requestWeatherForecasts } = this.props;

        let index = startDateIndex;
        requestWeatherForecasts(index);
    }

    onClick(index: number) {
        this.props.history.push(`/fetch-data/${index}`);
    }

    renderForecastsTable() {
        const { forecasts } = this.props;

        return (
            <Row direction="column">
                <Cell grow="0">
                    <Row direction="row">
                        <Cell grow="1" alignContent="left">Date</Cell>
                        <Cell grow="1" alignContent="left">Temp. (C)</Cell>
                        <Cell grow="1" alignContent="left">Temp. (F)</Cell>
                        <Cell grow="1" alignContent="left">Summary</Cell>
                    </Row>
                </Cell>
                <Cell grow="1">
                    {forecasts && forecasts.map((forecast: any) =>
                        <Row direction="row" key={forecast.dateFormatted}>
                            <Cell grow="1" alignContent="left">{forecast.dateFormatted}</Cell>
                            <Cell grow="1" alignContent="left">{forecast.temperatureC}</Cell>
                            <Cell grow="1" alignContent="left">{forecast.temperatureF}</Cell>
                            <Cell grow="1" alignContent="left">{forecast.summary}</Cell>
                        </Row>
                    )}
                </Cell>
            </Row>
        );
    }

    renderPagination() {
        const { startDateIndex } = this.props;

        const prevStartDateIndex = startDateIndex - 5;
        const nextStartDateIndex = startDateIndex + 5;

        return <Row direction="row">
            <Cell padding="none-small" grow="1">
                <Button onClick={() => this.onClick(prevStartDateIndex)}>Previous</Button>
            </Cell>
            <Cell padding="none-small" grow="1">
                <Button onClick={() => this.onClick(nextStartDateIndex)}>Next</Button>
            </Cell>
        </Row>;
    }

    render() {
        return (
            <Row direction="column" className={fetchDataStyles.fetchDataComponent} >
                <Cell padding="large-none">
                    <Text size="large">Weather forecast</Text>
                </Cell>
                <Cell alignContent="left">
                    <Text>This component demonstrates fetching data from the server and working with URL parameters.</Text>
                </Cell>
                <Cell padding="large-none">
                    {this.renderForecastsTable()}
                </Cell>
                <Cell padding="small-none">
                    {this.renderPagination()}
                </Cell>
            </Row>
        );
    }
}

const mapStateToProps = (state: any, { match }: any) => {
    let startDateIndex = parseInt(match.params.startDateIndex, 10) || 0;

    return {
        forecasts: getWeatherForecasts(state),
        startDateIndex: startDateIndex
    }
};

const mapDispatchToProps = { requestWeatherForecasts };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FetchDataComponent) as any);