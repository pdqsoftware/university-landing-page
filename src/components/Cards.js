import React from 'react'

import LargeCard from './LargeCard'

class Cards extends React.Component {
    render() {
        return (
            <section className="cards">
                <div className="cards-area">
                    <LargeCard 
                        cardImage='1'
                        imageHome = { this.props.imageHome }
                        cardTitle = { this.props.cardTitles[0] }
                        cardText = { this.props.cardTexts[0] }
                    />
                    <LargeCard 
                        cardImage='2'
                        imageHome = { this.props.imageHome }
                        cardTitle = { this.props.cardTitles[1] }
                        cardText = { this.props.cardTexts[1] }
                    />
                    <LargeCard 
                        cardImage='3'
                        imageHome = { this.props.imageHome }
                        cardTitle = { this.props.cardTitles[2] }
                        cardText = { this.props.cardTexts[2] }
                    />
                    <LargeCard 
                        cardImage='4'
                        imageHome = { this.props.imageHome }
                        cardTitle = { this.props.cardTitles[3] }
                        cardText = { this.props.cardTexts[3] }
                    />
                    <LargeCard 
                        cardImage='5'
                        imageHome = { this.props.imageHome }
                        cardTitle = { this.props.cardTitles[4] }
                        cardText = { this.props.cardTexts[4] }
                    />
                </div>
            </section>
        )
     } 
 }

 export default Cards