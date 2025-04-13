import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // Toggles the menu open/close
    const [navbarVisible, setNavbarVisible] = useState(true); // Toggle navbar visibility on scroll

    let lastScrollY = window.scrollY; // Track the last scroll Y position

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Hide navbar if scrolling down, show if scrolling up
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setNavbarVisible(false);
            } else {
                setNavbarVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`${styles.navbar} ${
                navbarVisible ? "" : styles.navbarHidden
            }`}
        >
            <div className={styles.navbarContainer}>
                {/* Logo */}
                <Link to="/" className={styles.logo}>
                    <img
                        src="src/assets/node-js.svg"
                        alt="Logo"
                        className={styles.logoImage}
                    />
                    Kovács Levente
                </Link>

                {/* Hamburger Menu Toggle */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>

                {/* Navigation Links */}
                <nav
                    className={`${styles.navLinks} ${
                        menuOpen ? styles.open : ""
                    }`}
                >
                    <Link to="#/" className={styles.navLink}>
                        Home
                    </Link>
                    <Link to="#/about" className={styles.navLink}>
                        About
                    </Link>
                    <Link to="#/projects" className={styles.navLink}>
                        Projects
                    </Link>
                    <Link to="#/contact" className={styles.navLink}>
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;