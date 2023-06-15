import React from "react";
import trois from '../assets/trois.png'
import { Link } from "react-router-dom";

const Footer = () => (

        <footer className="footer p-10 bg-base-200">
                <div className="flex items-center justify-center">
                    <img className="w-7" src={trois} alt="Logo 3blocks" />
                    <span className="font-bold text-4xl">3blocks</span>
                </div>

            <div>
                <span className="footer-title">About us</span>
                <Link to="/vision" className="link link-hover">Vision </Link>
                <a className="link link-hover">Term of use</a>
            </div>

            <div>
                <span className="footer-title">Creation</span>
                <a className="link link-hover">Collections</a>
            </div>

            <div>
                <span className="footer-title">Development</span>
                <a className="link link-hover">Development</a>
            </div>

            <div>
                <span className="footer-title">Finance</span>
                <a className="link link-hover">Treasury</a>
            </div>

        </footer>
    )

export default Footer
