import { FaGithubSquare, FaBehanceSquare } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { SiFreedesktopdotorg, SiYoutubeshorts, SiLinktree } from "react-icons/si";
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
          <a
            target="_blank"
            href="mailto:mina_gerguis@hotmail.com?subject=Hello%20Mina&body=Good%20morning%0APlease%20delete%20this%20message%20and%20write%20your%20inquiry,%20and%20I%20will%20reply%20to%20you%20😊"
            className={styles.trialButton}>
            Send Message Now ..!
          </a>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Platform</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href="#about"
                  className={styles.link}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={styles.link}>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#certificates"
                  className={styles.link}>
                  Cartificates
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/stage-kode/"
                  className={styles.link}>
                  <SiFreedesktopdotorg className={styles.icon} />
                  Stage Kode
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://linktr.ee/mina_gerguis"
                  className={styles.link}>
                  <SiLinktree className={styles.icon} />
                  Link Tree
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Social Media</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  target="_blank"
                  href="www.linkedin.com/in/mina-gerguis"
                  className={styles.link}>
                  <RxLinkedinLogo className={styles.icon} />
                  Linkedin
                </a>
              </li>
              <li>
                <a
                  target="'_blank"
                  href="https://x.com/mongerguis"
                  className={styles.link}>
                  <FaSquareXTwitter className={styles.icon} />
                  x.com
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://github.com/mina-gerguis/minagerguis"
                  className={styles.link}>
                  <FaGithubSquare className={styles.icon} />
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.behance.net/mina_gerguis/moodboards"
                  className={styles.link}>
                  <FaBehanceSquare className={styles.icon} />
                  Behance
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@minagerguis"
                  className={styles.link}>
                  <SiYoutubeshorts className={styles.icon} />
                  Youtube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>© 2025 Stage Kode. All rights reserved. Designed and developed by <a
          target="_blank"
          href="https://www.facebook.com/mongerguis">Mina Gerges</a> .</p>
      </div>
    </footer>
  );
};

export default Footer;
