import React from 'react'

class LargeCard extends React.Component {
    render() {
        const cardImage = this.props.imageHome + 'card' + this.props.cardImage + '.png'
        return (
            <section className="largecard">
                <img src={ cardImage } alt="Large Card Image" className="largecard__image" width={ this.props.width} height={ this.props.height }/>
            </section>
        )
     } 
 }

 export default LargeCard