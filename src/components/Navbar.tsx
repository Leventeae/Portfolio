import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.navbar}>
            <div className={styles.navbarContainer}>
                <Link to="/" className={styles.logo}>
                    Kovács Levente
                </Link>
                <nav className={`${styles.navLinks} ${menuOpen ? styles.mobileMenu : ''}`}>
                    <Link to="/" className={styles.navLink}>Home</Link>
                    <Link to="/about" className={styles.navLink}>About</Link>
                    <Link to="/projects" className={styles.navLink}>Projects</Link>
                    <Link to="/contact" className={styles.navLink}>Contact</Link>
                </nav>
                <button className={styles.hamburger} onClick={toggleMenu}>
                    {menuOpen ? '✖' : '☰'}
                </button>
            </div>
        </header>
    );
};

export default Navbar;