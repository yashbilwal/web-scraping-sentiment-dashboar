import React, { useState, useEffect } from "react";

function Loader() {
  const [shape, setShape] = useState(0);
  const shapes = ["circle", "square", "triangle", "diamond"];

  useEffect(() => {
    const interval = setInterval(() => {
      setShape(prev => (prev + 1) % shapes.length);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "200px" }}>
      <div 
        className="morphing-shape"
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#0d6efd",
          transition: "all 0.5s ease",
          borderRadius: shape === 0 ? "50%" : "0%",
          transform: 
            shape === 2 ? "rotate(45deg) skew(10deg, 10deg)" : 
            shape === 3 ? "rotate(45deg)" : "none",
          clipPath: 
            shape === 2 ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none"
        }}
      />
      <p className="mt-3 text-muted">Preparing content...</p>
    </div>
  );
}

export default Loader;