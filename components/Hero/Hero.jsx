import styles from "../../styles/Hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
  return (
    <header className={styles.header}>
      <div className={styles.text}>
        <p className={styles.hello} data-aos="fade-down" data-aos-delay="500">
          Hello! I&apos;m
        </p>
        <h1 data-aos="fade-down" data-aos-delay="600">Animesh Kumar Singh</h1>
        <p data-aos="fade-down" data-aos-delay="700">
          a Junior Student and a coding enthusiast who likes to build useful
          applications and services and keen to merge mechanical stuffs with software and automation inclusion.
        </p>
        <a href="#Contact" data-aos="fade-down" data-aos-delay="800">
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Hero;
