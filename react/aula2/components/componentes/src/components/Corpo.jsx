import React from "react";
import Aside from "./Aside";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Corpo() {
  return (
    <div className="container" style={{ backgroundColor: "#ecaa7d", color: "white", padding: "15px", margin: "10px 0" }}>
      <h3>Main Content</h3>
      <Aside />
    </div>
  );
}

