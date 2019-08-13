import React from 'react';
import counterStyles from './ErrorHandler.module.scss';
import { Cell, Row, Button, Text } from '../../Index';

interface IProps {
    children?: any
}

interface IStates {
    hasError: boolean
}

export default class ErrorHandlerComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);

        this.state = { hasError: false };
    }

    componentDidCatch(error: any, info: any) {
        console.log('error:', error);
        console.log('info:', info);
        this.setState({ hasError: true }, () => { console.log('hasErorr', this.state.hasError) });
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <Row direction="column" className={counterStyles.errorHandlerComponent}>
                    <Cell padding="large-none">
                        <Text size="large">Error occurred!</Text>
                    </Cell>
                </Row>
            );
        }

        return children || null
    }
}