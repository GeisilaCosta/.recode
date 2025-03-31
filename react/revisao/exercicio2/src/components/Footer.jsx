
function Footer({ year }) {
    return (
        <footer style={{
            textAlign: "center",
            padding: "10px",
            background: "#333",
            color: "#fff",
            position: "fixed",
            bottom: 0
        }}>© {year} Meu Site</footer>);
}

export default Footer;

// Footer: Mostra o ano atual utilizando props.