import React from 'react'

class LargeCard extends React.Component {
    render() {
        const cardImage = this.props.imageHome + 'card' + this.props.cardImage + '.png'
        const cardClass = "largecard largecard_image__" + this.props.cardImage
        const cardTop = "largecard-top_image__" + this.props.cardImage
        return (
            <div className={ cardClass }>
                <div className={ cardTop }></div>
                <div className="largecard-bottom">
                    <div className="largecard-bottom_title">{ this.props.cardTitle }</div>
                    <img src="images/arrow-right.svg" alt="Arrow right" className="largecard-bottom_arrow-image" width="30px"/>
                    <div className="largecard-bottom_content">{ this.props.cardText }</div>
                </div>
            </div>
        )
     } 
 }

 export default LargeCard
