/**
 * A search bar for github usernames.
 */

import React, {Component} from 'react';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        let username = this.state.value.trim();
        console.log(username);
        if(!username) {
            alert("Please enter a username");
            return;
        }
        this.props.onFormSubmit(username);

        this.setState({
            value: ''
        });
    }

    render() {

        let fontStyle = {
            fontSize: 14,
            fontFamily: this.state.value === '' ? 'FontAwesome' : 'inherit'
        };

        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input placeholder="&#xf002;" style={fontStyle} className="form-control"
                           onChange={this.onChange.bind(this)} value={this.state.value} />
                </form>
            </div>
        )
    }

}

export default Search;
