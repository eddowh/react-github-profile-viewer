/**
 * Main app
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';

class App extends Component {

    // Replaces getInitialState in JSX
    constructor(props) {
        super(props);
        this.state = {
            username: 'eddowh',
            userData: [],
            userRepos: [],
            perPage: 5
        }
    }

    // Get user data from GitHub
    getUserData() {
        $.ajax({
            url: ('https://api.github.com/users/' + this.state.username
                  + '?client_id=' + this.props.clientId
                  + '&client_secret=' + this.props.clientSecret),
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    userData: data
                });
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    userData: null
                });
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <div>
                <Profile userData={this.state.userData} />
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
