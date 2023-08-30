import React from "react";
import "./Footer.scss";
import Logo from "../../Pictures/logo_footer.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Kasa" className="footer__logo" />
      <div className="footer__copyright">© 2023 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
