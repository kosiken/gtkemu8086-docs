import React from 'react';
// Path to the logo file on your project
import rocketseatLogo from '../../../assets/krc.png'; //'assets/krc_small.png';
import version from '../../../assets/version.png'; //'assets/krc_small.png';


const Logo = () => (
<div style={{ position: 'relative'}}>
  <img src={rocketseatLogo} alt="Rocketseat logo" style={{ width: 180 }} />
  <img src={version} alt="version.png" style={{width:'80px', position: 'absolute',
bottom: '20px',
left: '80px'}} />

  </div>
);
export default Logo;
