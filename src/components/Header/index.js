import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <header class="items-center flex justify-between py-6 gap-10">
      <Link to="/">
        <img src={Logo} alt="Reframe's Logo" width="200" height="50" />
      </Link>

      <nav>
        <ul class="flex gap-2 text-base sm:text-lg md:text-lg lg:text-xl ">
          <li>
            <Link
              to="/"
              className="rounded-full py-2 px-3 sm:py-3 sm:px-6 inline-block hover:bg-gray-200 transition"
              activeClassName="bg-black text-white hover:bg-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="rounded-full py-2 px-3 sm:py-3 sm:px-6 inline-block hover:bg-gray-200 transition"
              activeClassName="bg-black text-white hover:bg-gray-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
