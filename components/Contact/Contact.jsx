import styles from "../../styles/Contact.module.css";
import { FiGithub,FiLinkedin,FiInstagram,FiMail } from 'react-icons/fi';
const Contact = () => {
    return (
        <div className={styles.contactContainer} data-aos="fade-up" id = "Contact">
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.contactContent}>I am actively looking for internship opportunities. Feel free to drop a mail in my Inbox.</p>
            <div className={styles.button}><a href="mailto:animeshkumar2611@gmail.com">Say Hello!</a></div>
            <div className ={styles.socials}>
                <a href = "https://www.linkedin.com/in/animesh-kumar-357b75161" target="_blank" rel="noreferrer"><FiLinkedin/></a>
                <a href = "mailto:animeshkumar2611@gmail.com" target="_blank" rel="noreferrer"><FiMail /></a>
                <a href = "https://www.instagram.com/animesh_2611/" target="_blank" rel="noreferrer"><FiInstagram /></a>
            </div>
        </div>
    )
}

export default Contact
