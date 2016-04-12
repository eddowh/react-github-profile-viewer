/**
 * Github profile data containing images, links, titles, etc.
 */

import React, {Component} from 'react';

import RepoList from './RepoList.jsx';

class Profile extends Component {

    render() {

        var user_html_url = this.props.userData.html_url;

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.userData.name}
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={this.props.userData.avatar_url} alt="Avatar URL" className="thumbnail" style={{width: "100%"}} />
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-12">
                                    <span className="label label-primary">
                                        <a target="_blank" href={user_html_url + "?tab=repositories"}>
                                            {this.props.userData.public_repos} Repos
                                        </a>
                                    </span>
                                    <span className="label label-success">
                                        <a target="_blank" href={"https://gist.github.com/" + this.props.userData.login}>
                                            {this.props.userData.public_gists} Public Gists
                                        </a>
                                    </span>
                                    <span className="label label-info">
                                        <a target="_blank" href={user_html_url + "/followers"}>
                                            {this.props.userData.followers} Followers
                                        </a>
                                    </span>
                                    <span className="label label-danger">
                                        <a target="_blank" href={user_html_url + "/following"}>
                                            {this.props.userData.following} Following
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-md-12">
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            <strong>Username: </strong> {this.props.userData.login}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Location: </strong> {this.props.userData.location}
                                        </li>
                                        <li className="list-group-item">
                                            <strong>Email Address: </strong> {this.props.userData.email}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <br />
                            <a className="btn btn-primary" target="_blank" href={user_html_url}>
                                Visit Profile
                            </a>
                        </div>
                    </div>
                    <hr />
                    <h3>
                        User Repositories
                    </h3>
                    <RepoList userRepos={this.props.userRepos} />
                </div>
            </div>
        )
    }

}

export default Profile;
