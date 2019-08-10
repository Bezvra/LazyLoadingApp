import React from 'react';
import { connect } from 'react-redux';
import counterStyles from './Counter.module.scss';
import { Cell, Row, Button, Text } from '../../Index';
import { getCount } from '../../../Redux/Selectors/Index';
import { increment, decrement } from '../../../Redux/Actions/Index';

interface IProps {
    count: number,
    increment: Function,
    decrement: Function
}

interface IStates { }

class CounterComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);

        //Bindings
        this.onIncrementClick = this.onIncrementClick.bind(this);
        this.onDecrementClick = this.onDecrementClick.bind(this);
    }

    onIncrementClick() {
        this.props.increment();
    }

    onDecrementClick() {
        this.props.decrement();
    }

    render() {
        const { count } = this.props;

        return (
            <Row direction="column" className={counterStyles.counterComponent}>
                <Cell padding="large-none">
                    <Text size="large">Counter</Text>
                </Cell>
                <Cell alignContent="left">
                    <Text>This is a simple example of a React component.</Text>
                </Cell>
                <Cell alignContent="left" padding="medium-none">
                    <Text>Current count: <strong>{count}</strong></Text>
                </Cell>
                <Cell alignContent="left" padding="small-none">
                    <Row>
                        <Cell grow="1" padding="none-small">
                            <Button onClick={this.onIncrementClick}>Increment</Button>
                        </Cell>
                        <Cell grow="1" padding="none-small">
                            <Button onClick={this.onDecrementClick}>Decrement</Button>
                        </Cell>
                    </Row>
                </Cell>
            </Row>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        count: getCount(state)
    }
};

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);