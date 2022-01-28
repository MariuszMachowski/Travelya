import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <p className="logo">Travelya</p>
                <section className="social">
                    <p className="socials">Follow Us:</p>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                </section>
                <div className="footerInfo">
                    <p>Cookie Policy</p>
                    <p>Privace Policy</p>
                    <p>About</p>
                    <p>Terms and Conditions</p>
                    <p>Contact</p>
                    <p>Support</p>
                </div>
                <p className="author">Mariusz Machowski Copyright &#169; 2022</p>
            </div>
        </footer>
    );
}

export default Footer;