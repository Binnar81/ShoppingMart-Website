import "./Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links">
          <a href="#">About</a>
          <a href="#">FAQs</a>
          <a href="#">Careers</a>
          <a href="#">Contact Us</a>
        </div>
        <p className="love">
          Made &nbsp; by{" "} ❤️
          <a
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
            href="https://github.com/Binnar81"
          >
            &nbsp; Sanjay Binnar
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
