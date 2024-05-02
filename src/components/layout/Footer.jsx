import React from "react";
import {AiFillInstagram, AiFillGithub, AiFillFacebook} from "react-icons/ai"
const Footer = () => {
  return (
    <footer>
      <div>
        <h2>MCA Burger Wala</h2>
        <p>We are trying to give you the best teste possible</p>
        <br />
        <em>We give attention to genuine feedback</em>
        <strong>All right reserved @ProjectGroup1</strong>
      </div>
      <aside>
        <h4>Follow Us</h4>
        <a href="https://github.com/Web-Bocket"><AiFillGithub /></a>
        <a href="https://www.facebook.com/"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/"><AiFillInstagram /></a>
      </aside>
    </footer>
  );
};

export default Footer;
