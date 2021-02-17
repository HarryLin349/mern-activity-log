import React, { Component } from 'react';
import demo from "./sample2.mp4"
import axios from 'axios';
const serverURL = "https://sheltered-headland-99987.herokuapp.com";
export default class Home extends Component {

    componentDidMount() {
        axios.get(serverURL + '/users/');
    }
    render() {
        return (
            <div className="row">
                <div className="col-7">
                    <h3>Welcome!</h3>
                    <p>Welcome to my Activity Log Website.</p>
                    <p>This website lets you record activities to a global log that others can see.</p>
                    <p>The main features of this site include:</p>
                    <ul>
                        <li>Creating Users</li>
                        <li>Logging Activities with a description and date</li>
                        <li>Editing or deleting prior entries</li>
                    </ul>
                    <p>If this is your first time on the site, you may find no data is shown. Please allow some time (up to a minute) for the Backend server to start.</p>
                    <p>For more on how to use the site, refer to the demo video on the right!</p>
                </div>
                <div className = "col-5">
                <h3>Demo Video</h3>
                <video width="100%" className="project-video center" controls src={demo} type="video/mp4">
                </video>
                </div>
            </div>
        )
    }
}