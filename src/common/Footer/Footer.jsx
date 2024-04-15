import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div>
            {new Date().getFullYear()} My To-Do List.
        </div>
        <div>
            &copy;Sacchi Jonas.
        </div>
    </footer>
  );
}

export default Footer;