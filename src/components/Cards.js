import React from 'react'

import LargeCard from './LargeCard'

class Cards extends React.Component {
    render() {
        return (
            <section className="cards">
                <LargeCard 
                    cardImage='1'
                    width='730'
                    height='520'
                    imageHome = { this.props.imageHome }
                />
                <LargeCard 
                    cardImage='2'
                    width='510'
                    height='520'
                    imageHome = { this.props.imageHome }
                />
                <LargeCard 
                    cardImage='3'
                    width='400'
                    height='520'
                    imageHome = { this.props.imageHome }
                />
                <LargeCard 
                    cardImage='4'
                    width='400'
                    height='520'
                    imageHome = { this.props.imageHome }
                />
                <LargeCard 
                    cardImage='5'
                    width='400'
                    height='520'
                    imageHome = { this.props.imageHome }
                />
            </section>
        )
     } 
 }

 export default Cards