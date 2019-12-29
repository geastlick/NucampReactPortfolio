import React, { Component } from 'react';
import FeatureCard from './FeatureCard';
import { features } from '../data/features';

class FeatureCards extends Component {
    render() {
        const cards = features.map((f, i) => {
            return (
                <FeatureCard  feature={f} imageSide={(i % 2 === 0 ? "left": "right")} />
            );
        });

        return cards;
    }
}

export default FeatureCards;
