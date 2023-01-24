import React from 'react';
import { ReactSVG } from 'react-svg';
import GlobeSVG from '/src/assets/globe.svg';

export default function Navbar() {
  return (
    <nav>
      <ReactSVG src={GlobeSVG} className='nav--logo' />
      <h3>my travel journal.</h3>
    </nav>
  );
}
