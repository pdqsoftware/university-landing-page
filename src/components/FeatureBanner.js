import React from 'react'

class FeatureBanner
 extends React.Component {
    render() {
        return (
            <section className="feature-banner">
                <div className="feature-banner_breaker"></div>
                <div className="feature-banner__title">
                    <h3 className="feature-banner_text">
                        Come along to one of our Open Days and find out everything you need to know about the campus, courses, and facilities
                    </h3>
                </div>
                <div className="feature-banner_button">
                    <a href="#" className="button button_white">Book an Open Day</a>
                </div>
            </section>
        )
     } 
 }

 export default FeatureBanner
