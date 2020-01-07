import React from 'react'

class Footer extends React.Component {

    render() {

        return (
            <div className="footer">
                <div className="need-help">
                    <h4>Need Help?</h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mkochalko/">
                        <h2>Contact Us</h2>
                    </a>
                </div>
                <div className="subscribe">
                    <h4>Subscribe</h4>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkochalko">
                        <h2>Git Hub</h2>
                    </a>

                </div>
                <div className="connect-with-us">
                    <h4>Connect with us</h4>
                    <ul className="iconLinks">
                        <li className="linkedIn">
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mkochalko/">
                                <img src="https://image.flaticon.com/icons/svg/145/145807.svg" alt="LinkedIn"/> 
                            </a>    
                        </li>
                        <li className="github">
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mkochalko">
                                <img src="https://image.flaticon.com/icons/svg/2111/2111432.svg" alt="GitHub"/>
                            </a>
                        </li>
                        <li className="personal-site"><img src="https://image.flaticon.com/icons/svg/747/747376.svg" alt="Matt's Personal Site"/></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer;