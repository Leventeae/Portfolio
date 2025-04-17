const FloatingButton = () => {
    const handleClick = () => {
        const section = document.getElementById("cta-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            className="floating-button"
            onClick={handleClick}
        >
            Get in Touch
        </button>
    );
};

export default FloatingButton;