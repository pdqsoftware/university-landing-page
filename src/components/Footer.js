import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="header_crest">
                    <img src="images/crest.png" alt="Ludlow University crest" className="crest__image" width="20px"/>
                </div>
                <div className="header_university">
                    <div>Ludlow</div>
                    <div>University</div>
                </div>
                <div className="footer_twitter">
                    <div>
                        <div className="footer_crest">
                            <img src="images/crest.png" alt="Ludlow University crest" className="crest__image" width="20px"/>
                        </div>
                        <div className="footer_university">
                            <div>Ludlow</div>
                            <div>University</div>
                        
                            <img src="images/twitter-large.png" alt="Ludlow University crest" className="twitter-large_image" width="40px"/>
                            <div className="footer_username">
                                @ludlowuni
                            </div>
                        </div>
                    </div>
                    <div className="footer_caption">
                        Ludlow university students enjoying a selfie after the 2019 #campuspaintrun. A total of £4913.14 was raised for multiple charities.  #runformoney.
                    </div>
                    <div className="footer_caption-date">
                        11:44 AM · Jul 10, 2019
                    </div>
                </div>
                <div className="footer_social">
                    <img src="images/twitter.png" alt="Social media link - Twitter" id="social-media_image" height="12px"/>
                    <img src="images/linkedin.png" alt="Social media link - LinkedIn" id="social-media_image" height="15px"/>
                    <img src="images/google.png" alt="Social media link - Google" id="social-media_image" height="12px"/>
                    <img src="images/facebook.png" alt="Social media link - Facebook" id="social-media_image" height="12px"/>
                </div>
            </footer>
        )
     } 
 }

 export default Footer