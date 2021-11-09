import React from 'react';
import './styles/Card.css'

function Footer() {
    return(
        <div>
            <footer>
                <ul className="nav">
                    <li>
                    <a href="https://github.com/aidanrich" className="heading" target="_blank" rel="noreferrer noopener">Github</a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/aidan-rich-62720b221/" className="heading" target="_blank" rel="noreferrer noopener">Linkdin</a>
                    </li>
                    <li>
                    <a href="https://aidanisthekingofmicrosoftpaint.com/" className="heading" target="_blank" rel="noreferrer noopener">Old Site</a>
                    </li>

                </ul>
            </footer>
        </div>
    )
}

export default Footer;