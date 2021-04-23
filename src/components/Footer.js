import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="footer-lhs">
                    
                    <div className="footer-lhs-watermark">
                        {/* <img src="images/large-crest-watermark.svg" alt="Ludlow University crest" className="crest__image" width="150px"/> */}
                    
                    
                        <div className="footer-university-lhs">
                            <div className="footer-university_crest">
                                <img src="images/crest3.png" alt="Ludlow University crest" className="crest__image" width="24px"/>
                            </div>
                            <div className="footer-university_text">
                                <div>Ludlow</div>
                                <div>University</div>
                            </div>
                        </div>
                        <div className="footer_social">
                            <img src="images/twitter.png" alt="Social media link - Twitter" id="social-media_image" height="12px"/>
                            <img src="images/linkedin.png" alt="Social media link - LinkedIn" id="social-media_image" height="15px"/>
                            <img src="images/google.png" alt="Social media link - Google" id="social-media_image" height="12px"/>
                            <img src="images/facebook.png" alt="Social media link - Facebook" id="social-media_image" height="12px"/>
                        </div>
                    </div>

                </div>
                <div className="footer-rhs">
                    <div className="footer-university-rhs">
                        <div className="footer-university-rhs_top">
                            <div className="footer-university_crest">
                                <img src="images/crest.png" alt="Ludlow University crest" className="crest__image" width="20px"/>
                            </div>
                            <div className="footer-university_twitter-header">
                                <div>Ludlow University</div>
                                <div id="footer-university_twitter-handle">@ludlowuni</div>
                            </div>
                            <div className="footer-university_twitter-icon">
                                <img src="images/twitter-large.png" alt="Twitter icon" className="crest__image" width="20px"/>
                            </div>
                        </div>
                        <div className="footer-university_twitter-body">
                            <div className="footer-university_twitter-body_text">
                                <p>Ludlow university students enjoying a selfie after the 2019 #campuspaintrun. A total of £4913.14 was raised for multiple charities.  #runformoney.</p>
                            </div>
                            <div className="footer-university_twitter-time">
                                11:44 AM · Jul 10, 2019
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </footer>
        )
     } 
 }

 export default Footer