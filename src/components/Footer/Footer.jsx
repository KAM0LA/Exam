import styles from "./footer.module.css";
import facebook from "../../assets/site-footer-icons/facebook.svg";
import twitter from "../../assets/site-footer-icons/twitter.svg";
import instagram from "../../assets/site-footer-icons/instagram.svg";
import linkedin from "../../assets/site-footer-icons/linkedin.svg";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className={styles.footer__license}>
          <div className={styles.license}>
            <p>Finstreet 118 2561 Fintown</p>
            <p>Hello@finsweet.com 020 7993 2905</p>
          </div>
          <div className={styles.site__footer__social}>
            <picture>
              <img src={facebook} alt="Facebook" />
              <img src={twitter} alt="Twitter" />
              <img src={instagram} alt="Instagram" />
              <img src={linkedin} alt="LinkedIn" />
            </picture>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
