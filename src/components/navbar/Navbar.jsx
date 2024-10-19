import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/sahil-kulkarni-181ab1246/">
            <img src="/linkdn.png" alt="" />
          </a>
          <a href="https://github.com/SahilKulkarni10">
            <img src="/Github.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
