import React from "react";

export default function Header() {
  return (
    <header className="header">
      <img
        src={require("../images/Troll-Face.png")}
        alt="Error"
        className="header--image"
      />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">HD</h4>
    </header>
  );
}
