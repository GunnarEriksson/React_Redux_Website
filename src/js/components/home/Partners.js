import React, { Component } from 'react';
import Slider from 'react-slick';

class Partners extends Component {
    render() {
        // Slider initial settings
        const settings = {
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            responsive: [
                {
                    breakpoint: 1280,
                    settings:
                    {
                        slidesToShow: 6,
                        slidesToScroll: 6
                    }
                },
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 768,
                    settings:
                    {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                }
            ]
        };

        return (
            <section className="row partners typography">
                <h1>Partners</h1>
                <div className="col-xs-10 col-xs-offset-1">
                    <div className="partners-slider">
                        <Slider {...settings}>
                            {this.props.partners.map((partner, index) => {
                                return <div key={index}><img src={partner.image} alt={partner.alt} /></div>
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Partners;
