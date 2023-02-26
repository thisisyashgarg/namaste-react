import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <p data-testid="footer" className="text-center my-4">
      @ Created by{" "}
      <a
        href="https://thisisyashgarg.netlify.app"
        className="hover:text-gray-900 hover:font-medium"
        target="_blank"
      >
        Yash Garg
      </a>
    </p>
  );
};

export default Footer;
