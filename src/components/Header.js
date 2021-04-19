import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header_crest">
                    <img src="images/crest.png" alt="Ludlow University crest" className="crest__image" width="20px"/>
                </div>
                <div className="header_university">
                    <div>Ludlow</div>
                    <div>University</div>
                </div>
                <div className="header_navigate">
                    <div id="header_navigate__item">Study</div>
                    <div id="header_navigate__item">Research</div>
                    <div id="header_navigate__item">About us</div>
                    <div id="header_navigate__item">
                        <img src="images/magnify.png" alt="Magnifying glass" className="magnifying-glass" width="20px"/>
                    </div>
                </div>
            </header>
        )
     } 
 }

 export default Header