import React from "react";
import { motion } from "framer-motion";
import "./index.css"; // make sure CSS is imported

function Portfolio() {
  return (
    <div>
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="header"
      >
        <h1>My Portfolio</h1>
      </motion.header>

      {/* About Section */}
      <motion.section
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>ABOUT ME</h2>
        <p>I’m a passionate developer who loves building modern web apps 🚀</p>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        className="section"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>SKILLS</h2>
        <ul>
          <li>React.js</li>
          <li>Docker & Kubernetes</li>
          <li>CI/CD with GitHub Actions</li>
        </ul>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        className="section"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>PROJECTS</h2>
        <p>Some cool projects will go here.</p>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="section"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>CONTACT</h2>
        <p>Email: shashahanas5@gmail.com</p>
      </motion.section>
    </div>
  );
}

export default Portfolio;

