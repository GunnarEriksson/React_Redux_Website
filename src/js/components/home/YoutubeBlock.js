import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class YoutubeBlock extends Component {
    render() {
        return (
            <section className="video col-sm-6">
                <div className="video-header text-center">
                    How it works
                </div>
                <div className="video-handler">
                    <div className="video-handler-wrapper">
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=Bxztt0g-dPw'
                            height="100%"
                            width="100%"
                         />
                    </div>
                </div>
            </section>
        );
    }
}

export default YoutubeBlock;
