import "./Footer.scss";
import React from "react";
import insta from "../../icons/insta.png";
import fb from "../../icons/fb.png";
import twitter from "../../icons/twitter.png";
import whatsapp from "../../icons/whatsapp.png";
import youtube from "../../icons/youtube.png";
import google from "../../icons/google.png";
import cloud from "../../icons/cloud.png";
import mail from "../../icons/mail.png";

function Footer() {
  return (
    <footer className="Footer">
      <img src={mail} alt="plus" />
      <img src={fb} alt="plus" />
      <img src={twitter} alt="plus" />
      <img src={whatsapp} alt="plus" />
      <img src={youtube} alt="plus" />
      <img src={insta} alt="plus" />
      <img src={google} alt="plus" />
      <img src={cloud} alt="plus" />
    </footer>
  );
}

export default Footer;
