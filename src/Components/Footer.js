import React, { useState } from "react";
import "./css/Footer.css";
import { Link } from "react-router-dom";
import Facebook from "../Assets/Facebook";
import Github from "../Assets/Github";
import Instagram from "../Assets/Instagram";
import Mail from "../Assets/Mail";

function Footer() {
    // Change the links in footers here:
    const linkPrivacyPolicy = "https://www.cornellappdev.com/";
    const linkGithub = "https://github.com/cuappdev";
    const linkFacebook = "https://www.facebook.com/cornellappdev/";
    const linkInstagram = "https://www.instagram.com/cornellappdev/";
    const linkMail = "mailto:team@cornellappdev.com";
    return (
        <footer>
            <p>
                Designed and developed with 🖤 in Ithaca, New York. Cornell
                AppDev © 2020. See our&nbsp;
                <a href={linkPrivacyPolicy}>privacy policy</a>.
            </p>
            <div class="footerSocialMedia">
                <a href={linkGithub}>
                    <Github />
                </a>
                <a href={linkFacebook}>
                    <Facebook />
                </a>
                <a href={linkInstagram}>
                    <Instagram />
                </a>
                <a href={linkMail}>
                    <Mail />
                </a>
            </div>
        </footer>
    );
}

export default Footer;