const Contact = () => (
    <section>
        <h2>Contact Me</h2>
        <p>Want to work together or just say hi?</p>
        <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=kovacslevente.work@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
                display: 'inline-block',
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#3498db',
                color: '#fff',
                borderRadius: '6px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#2980b9')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#3498db')}
        >
            📧 Gmail me
        </a>
    </section>
);

export default Contact;