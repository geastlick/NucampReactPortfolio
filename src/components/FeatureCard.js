import React, { Component } from 'react';
import { Jumbotron, Media } from 'reactstrap';

class FeatureCard extends Component {
    highlights(list) {
        return (
            <ul>
            {
                list.map(i => {
                    if(Array.isArray(i)) {
                        return this.highlights(i);
                    } else {
                        return (
                            <li>{i}</li>
                        );
                    }
                })
            }
            </ul>
        )
    }

    render() {
        const image = (img,alt) => {
            return (
                <img src={img} alt={alt} className="w-25 img-thumbnail card-img-left" />
            );
        }

        return (
            <div className="row row-content">
                <div className="col-12">
                    <Jumbotron fluid>
                    <Media className="mx-3">
                        {(this.props.imageSide === "left" ? image(this.props.feature.image,this.props.feature.imageAlt): "")}
                        <Media body className="align-self-center">
                            <h3 className="text-center mb-4">{this.props.feature.title}</h3>
                            {this.highlights(this.props.feature.highlights)}
                        </Media>
                        {(this.props.imageSide === "right" ? image(this.props.feature.image,this.props.feature.imageAlt): "")}
                    </Media>
                    </Jumbotron>
                </div>
            </div>
        );
    }
}

export default FeatureCard;
