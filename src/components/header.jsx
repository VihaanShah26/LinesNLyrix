import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
<header>
  <div className="logo-and-nav">
    <img src='https://s3-alpha-sig.figma.com/img/8026/ce21/7ce1c91dc6c9ef4dedf3715872b15511?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jtU-v-H209cSRoK9KSVe7xvijEwU3hdp45vUR15-jWkmmqL5~Kp~INJRRL9-dNLxIO6FqoISbNll6U4GsZC0mnZPSERQ7oCkAH2-FwvbVdlUR-iLTKNr1vKQdMDf6kNgs35fruyVzH20KWLu8BlI3r00w93qLerTMTcIBgx~QJpAMfngLSkih~04pEfpa3oehK-4my1I9eMUr847O-NBuwoPW91hQLnFIucwQfVQFnvexzHWYQ-KPUfTBWkkL454MOGCbaHrRS88lft9lyd15vo8IoU7nDqaRrm9NCKQ~BZdvgAWyBsBDBMZnZvJwLXI02VjyxoQW0sr8tlTmiIqxw__'alt="Logo"/>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/games">Games</Link>
      <Link to="/leaderboard">Leaderboard</Link>
      <Link to="/playlist">Playlist</Link>
      <Link to="/collection">Collection</Link>
      <Link to="/about">About Us</Link>
      <Link to="/login">Log In</Link>
    </nav>
  </div>
  
</header>
}

export default Header;