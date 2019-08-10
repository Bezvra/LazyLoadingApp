import * as React from "react";
import * as LoaderStyles from './Loader.module.scss';
import { Row, Cell } from "../../../Components/Index";

interface IProps {
    type?: 'default' | 'success' | 'info' | 'warning' | 'danger' | 'secondary'
}

interface IStates {}

export default class LoaderComponent extends React.Component<IProps, IStates> {
	
    constructor (props: IProps) {
        super(props);
    }

    render () {
        const { type = 'default' } = this.props;
        
        return (
            <Row grow="0" className={ LoaderStyles.loaderComponent }>
                <Cell grow="1" className={ LoaderStyles.spinner } data-type={ type }>
                    <Row alignChildren="center">
                        <Cell className={ [ LoaderStyles.bounce, LoaderStyles.bounce1].join(' ') } ></Cell>
                        <Cell className={ [ LoaderStyles.bounce, LoaderStyles.bounce2].join(' ') } ></Cell>
                        <Cell className={ [ LoaderStyles.bounce, LoaderStyles.bounce3].join(' ') } ></Cell>
                        <Cell className={ [ LoaderStyles.bounce, LoaderStyles.bounce4].join(' ') }></Cell>
                    </Row>
                </Cell>
            </Row>
        );
    }
}
