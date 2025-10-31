import { FaGithubSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiFreedesktopdotorg } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <p className={styles.heading}>
            Let’s stop talking ــ <br /> Let’s build greatness <br /> together.
          </p>
          <a href="#" className={styles.trialButton}>
            Send Message Now ..!
          </a>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Platform</h3>
            <ul className={styles.linkList}>
              <li><a href="#about" className={styles.link}>About</a></li>
              <li><a href="#projects" className={styles.link}>Projects</a></li>
              <li><a href="#certificates" className={styles.link}>Cartificates</a></li>
              <li><a href="#" className={styles.link}><SiFreedesktopdotorg className={styles.icon} /> Stage Kode</a></li>
              <li><a href="#" className={styles.link}>FAQ</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Social Media</h3>
            <ul className={styles.linkList}>
              <li><a href="#" className={styles.link}><RxLinkedinLogo className={styles.icon} />  Linkedin</a></li>
              <li><a href="#" className={styles.link}><FaSquareXTwitter
                className={styles.icon} />x.com</a></li>
              <li><a href="#" className={styles.link}><FaGithubSquare className={styles.icon}/> Github
</a></li>
              <li><a href="#" className={styles.link}>FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2025 Stage Kode. All rights reserved. Designed and developed by <a href="">Mina Gerges</a> .</p>
      </div>
    </footer>
  );
};

export default Footer;
