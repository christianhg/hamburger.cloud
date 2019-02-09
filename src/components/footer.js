import React from 'react';

export const Footer = () => (
  <footer>
    <div className="inner">
      <span className="copyright">
        Copyright © {new Date().getFullYear()} Christian Hamburger Grøngaard
      </span>
      <span className="misc">
        <a href="https://github.com/christianhg/hamburger.cloud">
          {'{'}src{'}'}
        </a>
        <a href="/rss.xml">RSS</a>
      </span>
    </div>
  </footer>
);
