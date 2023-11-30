import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer>
            Conteudo Rodape
            <ul className={styles.list}>
                <li className={styles.item}>
                    <FaFacebook/>
                </li>
                <li className={styles.item}>
                    <FaInstagram/>
                </li>
                <li className={styles.item}>
                    <FaLinkedin/>
                </li>
            </ul>
        </footer>
        
    )
    
}

export default Footer