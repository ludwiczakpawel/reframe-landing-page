import React from "react";
import { Link } from "gatsby";

const Footer = () => {
  return (
    <footer className="py-24 flex flex-col md:flex-row justify-between gap-2 w-full max-w-3xl mx-auto items-start">
      <p class="opacity-50">
        &copy;2022 Reframe Technology Inc.
        <br />
        Made with love, from around the world.
      </p>
      <div className="flex gap-6 items-center">
        <Link
          to="/privacy-policy"
          className="underline opacity-50 hover:opacity-100"
        >
          Privacy Policy
        </Link>

        <Link
          to="https://www.linkedin.com/company/reframe-tech/"
          className="underline opacity-50 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z" />
          </svg>
        </Link>

        <Link
          to="mailto:hello@reframetech.com"
          className="underline opacity-50 hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
