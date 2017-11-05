import React, {Component} from 'react';
import Slider from 'react-slick';

class Categories extends Component {
    render() {
        // Slider initial settings
        const settings = {
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 9,
            slidesToScroll: 9,
            responsive: [
                {
                    breakpoint: 1280,
                    settings:
                    {
                        slidesToShow: 9,
                        slidesToScroll: 9
                    }
                },
                {
                    breakpoint: 992,
                    settings:
                    {
                        slidesToShow: 7,
                        slidesToScroll: 7
                    }
                },
                {
                    breakpoint: 768,
                    settings:
                    {
                        slidesToShow: 5,
                        slidesToScroll: 5
                    }
                },
                {
                    breakpoint: 500,
                    settings:
                    {
                        slidesToShow: 3,
                        slidesToScroll: 3
                    }
                },
            ]
        };

        return (
            <section className="row categories">
                <div className="col-xs-10 col-xs-offset-1">
                    <div className="categories-slider">
                        <Slider {...settings}>
                            {this.props.categories.map((category, index) => {
                                return(
                                    <div key={index}>
                                        <a href="#/projects">
                                            <img src={category.image}
                                            alt={category.alt} />
                                            <p>{category.text}</p>
                                        </a>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default Categories;
