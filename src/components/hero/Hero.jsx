import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

const sliderVariants = {
  initial: { x: 0 },
  animate: {
    x: "-220%",
    transition: { repeat: Infinity, repeatType: "mirror", duration: 20 },
  },
};

const Hero = () => {
  const openGitHubProfile = () => {
    console.log("GitHub button clicked");
    window.location.href = "https://github.com/SahilKulkarni10";
  };

  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Hello! I am Sahil Kulkarni</motion.h2>
          <motion.h1 variants={textVariants}>A Full Stack Developer and ML Enthusiast</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants} onClick={openGitHubProfile}>
              View My GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web developer
      </motion.div> */}
      <div className="imageContainer">
        <img src="/Hero.jpg" alt="Hero Section" />
      </div>
    </div>
  );
};

export default Hero;
