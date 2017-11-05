import React, { Component } from 'react';

class Facebook extends Component {
    render() {
        return (
            <section className="follow col-sm-6">
                <div className="">
                    <div className="follow-header text-center">
                        Follow us
                    </div>
                    <div className="follow-content">
                        <div className="follow-content-wrapper">
                            <img src={require('../../../img/home/greenbay_facebook.jpg')} alt="Green bay foundation at Facebook" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facebook;
