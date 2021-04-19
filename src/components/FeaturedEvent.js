import React from 'react'

class FeaturedEvent extends React.Component {
    render() {
        const cardImage = this.props.imageHome + 'fe-card' + this.props.cardImage + '.png'
        const cardClass = "featured-event-card__" + this.props.cardImage
        const day = this.props.featureDate.substr(0,2)
        const month = this.props.featureDate.substr(2)
        return (
            <section className={ cardClass }>
                {/* <h5>Featured Event Card</h5> */}
                {/* <img src={ cardImage } alt="Featured Event Image" className="featured-event-card__image" width={ this.props.width} height={ this.props.height }/> */}
                <div className="featured-event-card_date">
                    <div className="featured-event-card_date_box">
                        <p>{ day }</p>
                        <p>{ month }</p>
                    </div>
                </div>
                <div className="featured-event-card_title">
                    <h3>{ this.props.featureText }</h3>
                </div>
            </section>
        )
     } 
 }

 export default FeaturedEvent