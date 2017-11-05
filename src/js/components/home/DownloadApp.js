import React, { Component } from 'react';
import { IndexLink } from 'react-router';

class DownloadApp extends Component {
    render() {
        return (
            <section className="row app typography">
                <h1>Download our App - Available on iOS and Android</h1>
                <div className="app-image">
                    <img src={require('../../../img/home/load_app.jpg')} alt="The Green bay donation app" />
                </div>
                <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4 text-center">
                    <div className="app-buttons">
                        <IndexLink to="#"><img src={require('../../../img/home/app_store.png')} alt="App Store button" /></IndexLink>
                        <IndexLink to="#"><img src={require('../../../img/home/google_play.png')} alt="Google Play button" /></IndexLink>
                    </div>
                </div>
            </section>
        );
    }
}

export default DownloadApp;
