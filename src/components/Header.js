import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="header-crest">
                    <div className="header-crest_crest">
                        <img src="images/crest.png" alt="Ludlow University crest" className="crest-image" width="40px"/>
                    </div>
                    <div className="header_university">
                        {/* <div>
                            <img src="images/uppL.png" alt="Uppercase L" width="15px"/>
                            <img src="images/u.png" alt="Lowercase u" height="16px"/>
                            <img src="images/d.png" alt="Lowercase d" height="21px"/>
                            <img src="images/lowL.png" alt="Lowercase l" height="22px"/>
                            <img src="images/o.png" alt="Lowercase o" height="16px"/>
                            <img src="images/w.png" alt="Lowercase w" height="16px"/>
                        </div>
                        <div>
                            <img src="images/uppU.svg" alt="Lowercase u" width="20px"/>
                            <img src="images/n.svg" alt="Lowercase d" width="14px"/>
                            <img src="images/i.svg" alt="Lowercase l" width="6px"/>
                            <img src="images/v.svg" alt="Lowercase v" width="16px"/>
                            <img src="images/e.svg" alt="Lowercase w" width="15px"/>
                            <img src="images/r.svg" alt="Lowercase w" width="9px"/>
                            <img src="images/s.svg" alt="Uppercase L" width="14px"/>
                            <img src="images/i.svg" alt="Uppercase L" width="6px"/>
                            <img src="images/t.svg" alt="Uppercase L" width="12px"/>
                            <img src="images/y.svg" alt="Uppercase L" width="15px"/>
                        </div> */}
                        <div>Ludlow</div>
                        <div>University</div>
                    </div>
                </div>
                <div className="header_navigate">
                    <div id="header_navigate__item">Study</div>
                    <div id="header_navigate__item">Research</div>
                    <div id="header_navigate__item">About us</div>
                    <div id="header_navigate__magnify">
                        <img src="images/magnify.png" alt="Magnifying glass" className="magnifying-glass" width="30px"/>
                    </div>
                </div>
            </header>
        )
     } 
 }

 export default Header