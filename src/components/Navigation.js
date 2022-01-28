import React from 'react';
import '../styles/Navigation.css';
import { Link } from 'react-scroll';
const Navigation = () => {
    const handleMenu = (action) => {
        const burger = document.querySelector('i.fa-bars');
        if (action === "show") {
            burger.classList.add('active');
        } else if (action === "hide") {
            burger.classList.remove('active');
        }
    }
    window.addEventListener('scroll', () => {
        const menuUl = document.querySelector('ul.menu');
        const burger = document.querySelector('i.fa-bars');
        const scrollHeight = window.scrollY;
        if (scrollHeight > 100) {
            menuUl.classList.add('active');
            burger.classList.add('dark');
        } else {
            menuUl.classList.remove('active')
            burger.classList.remove('dark');
        }
    })
    return (
        <nav className='main'>
            <i onClick={() => handleMenu("show")} className="fas fa-bars"></i>
            <ul className='menu'>
                <i onClick={() => handleMenu("hide")} className="fas fa-times"></i>
                <li><Link to="header" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="discover" spy={true} smooth={true} offset={0} duration={500}>Discover</Link></li>
                <li><Link to="destinations" spy={true} smooth={true} offset={-60} duration={500}>Explore</Link></li>
                <li><Link to="places" spy={true} smooth={true} offset={-70} duration={500}>Attractions</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;