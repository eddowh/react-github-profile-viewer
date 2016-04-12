/**
 * Main app
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

    // replaces getInitialState in JSX
    constructor(props) {
        super(props);
        this.state = {
            username: 'eddowh',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    render() {
        return (
            <div>
                {this.state.username}
                <br/>
                {this.props.clientId}
            </div>
        )
    }

}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};
App.defaultProps = {
    clientId: '0ad1b2dca15b777378f6',
    clientSecret: 'a3e792590988f0e18ce2f67cf9b279765d16368b'
};

export default App;
