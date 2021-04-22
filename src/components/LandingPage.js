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
                    'Study collaboration session'],
            cardTitles: ['Activities and clubs', 
                    'Accomodation', 
                    'Chat to a student', 
                    'Support', 
                    'Life in Ludlow'],
            cardTexts: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus luctus odio. Curabitur bibendum faucibus.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id leo tincidunt, iaculis diam at.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac mattis urna, a iaculis tellus.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur bibendum venenatis. Donec nec neque.',
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur venenatis tortor at pellentesque. Nulla.'
                    ]
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
                            cardTitles = { this.state.cardTitles}
                            cardTexts = { this.state.cardTexts}
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

