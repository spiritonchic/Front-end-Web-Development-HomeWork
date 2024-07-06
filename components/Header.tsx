import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/skills">Skills</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/comics">Comics</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
