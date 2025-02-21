import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <div style={styles.container}>
      <style>{keyframeStyles}</style>
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <motion.div
        style={styles.homeBox}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={styles.title}>ยินดีต้อนรับ ร้านค้า</h1>
        <p style={styles.subtitle}>คุณจะมองหาสนค้าที่ร้านเรามีพร้อมทุกอย่าง</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link to="/products" style={styles.button}>⚽ เตรียมตัว</Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

const keyframeStyles = `
  @keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes meteorAnimation {
    0% { transform: translateY(-100vh) translateX(50vw) rotate(45deg); opacity: 1; }
    100% { transform: translateY(100vh) translateX(-50vw) rotate(45deg); opacity: 0; }
  }

  .meteor {
    position: absolute;
    width: 3px;
    height: 40px;
    background: white;
    opacity: 0.7;
    filter: blur(1px);
    animation: meteorAnimation 2s linear infinite;
  }
`;

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    background: "linear-gradient(-45deg, #D6A6FF, #9C4EDD, #5E1E9B, #4B006E, #3D004C)",
    backgroundSize: "400% 400%",
    animation: "gradientAnimation 10s ease infinite",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  homeBox: {
    position: "relative",
    background: "rgba(200, 230, 255, 0.8)",
    padding: "3rem",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(173, 216, 230, 0.5)",
    maxWidth: "500px",
    width: "90%",
    textAlign: "center",
    backdropFilter: "blur(10px)",
  },
  title: {
    color: "#4B006E",
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
    textShadow: "0px 0px 10px rgba(75, 0, 110, 0.3)",
  },
  subtitle: {
    color: "#9C4EDD",
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    display: "inline-block",
    backgroundColor: "#9C4EDD",
    color: "#fff",
    padding: "12px 24px",
    borderRadius: "10px",
    fontSize: "1rem",
    fontWeight: "bold",
    textDecoration: "none",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 10px rgba(156, 78, 221, 0.5)",
  },
};

export default Home;
