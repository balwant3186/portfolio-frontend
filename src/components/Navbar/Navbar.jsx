import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import "./Navbar.scss";

export const menuItems = ["home", "about", "work", "skills", "contact"];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>BALWANT</h1>
      </div>
      <ul className="app__navbar-links">
        {menuItems.map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {menuItems.map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
