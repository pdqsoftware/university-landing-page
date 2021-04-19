import React from 'react'

import FeaturedEvent from './FeaturedEvent'

class FeaturedEvents extends React.Component {
    render() {
        return (
            <section className="featured-events">
                <FeaturedEvent 
                    cardImage='1'
                    width='400'
                    height='624'
                    imageHome = { this.props.imageHome }
                    featureText = { this.props.featureText[0] }
                    featureDate = { this.props.featureDates[0] }
                />
                <FeaturedEvent 
                    cardImage='2'
                    width='400'
                    height='624'
                    imageHome = { this.props.imageHome }
                    featureText = { this.props.featureText[1] }
                    featureDate = { this.props.featureDates[1] }
                />
                <FeaturedEvent 
                    cardImage='3'
                    width='400'
                    height='624'
                    imageHome = { this.props.imageHome }
                    featureText = { this.props.featureText[2] }
                    featureDate = { this.props.featureDates[2] }
                />
            </section>
        )
     } 
 }

 export default FeaturedEvents