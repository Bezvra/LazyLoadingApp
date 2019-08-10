import React from 'react';
import bodyStyles from './Body.module.scss';
import { Cell, Row, BottomBar } from '../Index';

interface IProps {
    children?: any
}

interface IStates { }

export default class BodyComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <Row direction="column" className={bodyStyles.bodyComponent}>
                <Cell grow="1">
                    {children || null}
                </Cell>
                <Cell grow="0">
                    <BottomBar />
                </Cell>
            </Row>
        );
    }
}
