import React from 'react';
import homeStyles from './Home.module.scss';
import { Cell, Row, Text } from '../../Index';

interface IProps { }

interface IStates { }

export default class HomeComponent extends React.Component<IProps, IStates> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <Row grow="1" direction="column" className={homeStyles.homeComponent}>
                <Cell>
                    <Text size="large">Hello, world!</Text>
                </Cell>
                <Cell alignContent="left">
                    <Text>Welcome to your new single-page application, built with:</Text>
                </Cell>
                <Cell alignContent="left">
                    <ul>
                        <li><Text><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</Text></li>
                        <li><Text><a href='https://facebook.github.io/react/'>React</a> and <a href='https://redux.js.org/'>Redux</a> for client-side code</Text></li>
                        <li><Text><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</Text></li>
                    </ul>
                </Cell>
                <Cell alignContent="left">
                    <Text>To help you get started, we've also set up:</Text>
                </Cell>
                <Cell alignContent="left">
                    <ul>
                        <li><Text><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</Text></li>
                        <li><Text><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</Text></li>
                        <li><Text><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</Text></li>
                    </ul>
                </Cell>
                <Cell alignContent="left">
                    <Text>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</Text>
                </Cell>
            </Row>
        );
    }
}
