import React, { Component } from 'react';
import axios from 'axios';
import img from '../img/user.png';

export default class Profile extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        axios.get('./data.json')
            .then(res => {
                console.log(res);
                this.setState({
                    'user': res.data
                }, () => { console.log(this.state.user) })
            })
            .catch(err => console.log(err))
    }

    render() {
        const user = this.state.user;

        return (
            <div className="container">
                <h2 className="center">
                    Welcome {user.userName}
                </h2>
                <div className="col s12 m7">
                    <div className="card horizontal #bbdefb blue lighten-4">
                        <div className="card-image profile-img ">
                            <img src={img} />
                        </div>
                        <div className="card-stacked user-details">
                            <ul className="collection user-collection align-right">
                                <li className="collection-item avatar">
                                    <i className="material-icons circle black">
                                        account_circle</i>
                                    <p>
                                        {user.name} <br />
                                        {user.email}
                                    </p>
                                    <a href="#!" className="secondary-content">
                                        <i className="material-icons">create</i></a>
                                </li>
                                <li className="collection-item avatar">
                                    <i className="material-icons circle black">
                                        location_city</i>

                                    <p>{user.City}<br />
                                        {user.Country}
                                    </p>
                                    <a href="#!" className="secondary-content">
                                        <i className="material-icons">create</i></a>
                                </li>
                                <li className="collection-item avatar">
                                    <i className="material-icons circle black">star</i>

                                    <p>{`${user.TechStack}`} <br />

                                    </p>
                                    <a href="#!" className="secondary-content">
                                        <i className="material-icons">create</i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


