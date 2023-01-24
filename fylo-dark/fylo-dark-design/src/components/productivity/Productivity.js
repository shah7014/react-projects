import React from "react";
import "./Productivity.scss";
import prodImage from "../../images/illustration-stay-productive.png";
import { Link } from "react-router-dom";

const Productivity = () => {
  return (
    <div className="prod">
      <img src={prodImage} alt="productivity" className="prod__image" />
      <div className="content">
        <h3 className="content--title">Stay productive, wherever you are</h3>
        <p className="content--desc">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="content--desc">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <Link to="/">See how Fylo works</Link>
      </div>
    </div>
  );
};

export default Productivity;
