import * as React from "react";
import * as BottomBarStyles from './BottomBar.module.scss';
import {
    Row,
    Cell,
    Text,
    Button
} from '../../../Components/Index';
import { getLocationState } from "../../../Services/Location.Service";
import { withRouter } from "react-router";

interface IProps {
    history: {
        push: (url: any) => void
    },
    location: any,
    onPageChange?: Function
}

interface IStates {}

class BottomBarComponent extends React.Component<IProps, IStates> {
	
    constructor (props: IProps) {
        super(props);

        // Bindings
        this.openPage = this.openPage.bind(this);
    }

    openPage (url: string) {
        url === '/' && (url = '');
        this.props.history.push(`/${url}`);

        this.props.onPageChange && this.props.onPageChange(url);
    }

    render () {
        let { location } = this.props;
        let locationState = getLocationState(location);
        let activePage = locationState.activePage;

        return (
            <Row grow="0" shrink="0" className={ BottomBarStyles.bottomBarComponent }>
                <Cell grow="1">
                    <Button padding="none" active={ activePage === '/' || activePage === '' } type="text" onClick={ () => this.openPage('/') }>
                        <Row alignChildren="center" wrap="wrap">
                            {/* Text */}
                            <Cell style={ {padding: '.3125rem'} }>
                                <Text size="smallest" type="none">Home</Text>
                            </Cell>
                        </Row>
                    </Button>
                </Cell>
                <Cell grow="1">
                    <Button padding="none" active={ activePage === 'counter' } type="text" onClick={ () => this.openPage('counter') }>
                        <Row alignChildren="center" wrap="wrap">
                            {/* Text */}
                            <Cell style={ {padding: '.3125rem'} }>
                                <Text size="smallest" type="none">Counter</Text>
                            </Cell>
                        </Row>
                    </Button>
                </Cell>
                <Cell grow="1">
                    <Button padding="none" active={ activePage === 'fetch-data' } type="text" onClick={ () => this.openPage('fetch-data') }>
                        <Row alignChildren="center" wrap="wrap">
                            {/* Text */}
                            <Cell style={ {padding: '.3125rem'} }>
                                <Text size="smallest" type="none">Fetch data</Text>
                            </Cell>
                        </Row>
                    </Button>
                </Cell>
            </Row>
        );
    }
}

export default withRouter(BottomBarComponent as any);