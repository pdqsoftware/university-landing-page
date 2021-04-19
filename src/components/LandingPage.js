import React from 'react'

import Header from './Header'
import Hero from './Hero'
import Cards from './Cards'
import FeatureBanner from './FeatureBanner'
import UpcomingEvents from './UpcomingEvents'
import FeaturedEvents from './FeaturedEvents'
import Footer from './Footer'


class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loaded: false,
            images: '/images/',
            card1: 'card1.png',
            feDates: ['01Aug', '14Aug', '21Aug'],
            feText: ['Ludlow campus rock festival 2019',
                    '2019 game design exhibition',
                    'Study collaboration session']
        }
    }

    componentDidMount() {
        this.setState(() => ({loaded: true}))
    }

    render() {
        return (
            <div>
                { this.state.loaded ?
                (
                    <div>
                        <Header />
                        <Hero 
                            width='752'
                        />
                        <Cards 
                            imageHome = { this.state.images}
                        />
                        <FeatureBanner />
                        <UpcomingEvents 
                            imageHome = { this.state.images}
                            featureText = { this.state.feText }
                            featureDates = { this.state.feDates }
                        />
                        <Footer />
                    </div>
                )
                : null }
            </div>
        )
    } 
 }

 export default LandingPage

