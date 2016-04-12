/**
 * Main app
 */

import React, {Component} from 'react';

import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component {

    // Replaces getInitialState in JSX
    constructor(props) {
        super(props);
        this.state = {
            username: 'eddowh',
            userData: [],
            userRepos: [],
            perPage: 10
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
                    username: null
                });
                alert(err);
            }.bind(this)
        });
    }

    // Get user data from GitHub
    getUserRepos() {
        $.ajax({
            url: ('https://api.github.com/users/' + this.state.username
                  + '/repos?per_page=' + this.state.perPage
                  + '&client_id=' + this.props.clientId
                  + '&client_secret=' + this.props.clientSecret
                  + '&sort=created'),
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    userRepos: data
                });
                console.log(data);
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    username: null
                });
                alert(err);
            }.bind(this)
        });
    }

    handleFormSubmit(username) {
        this.setState({
            username: username
        }, function() {
            this.componentDidMount();
        });
    }

    componentDidMount() {
        this.getUserData();
        this.getUserRepos();
    }

    render() {
        return (
            <div>
                <Search onFormSubmit={this.handleFormSubmit.bind(this)} />
                <br/>
                <Profile {...this.state} />
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
