// import react from "react";
import twitterLogo from "./images/Twitter Icon.png";
import instaLogo from "./images/Instagram Icon.png";
import githubLogo from "./images/GitHub Icon.png";
import facebookLogo from "./images/Facebook Icon.png";

export default function Footer() {
    return (
        <div className="footer--container">
            <div className="footer--items">
                <img src={twitterLogo} alt="Twitter Logo" />
                <img src={facebookLogo} alt="Facebook Logo" />
                <img src={instaLogo} alt="Instagram Logo" />
                <img src={githubLogo} alt="GitHub Logo" />
            </div>
        </div>
    )
}