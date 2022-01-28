import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";
import MenuIcon from '@mui/icons-material/Menu';

type navigationItems = {
  name: string;
  path: any;
};

type navigationProps = {
  itemName: string;
  path: string;
};
export const NavigationItems = ({ itemName, path }: navigationProps) => {
  return (
    <li className="navigation__item">
      <a href="" className={`navigation__link`}>
        {itemName}
      </a>
    </li>
  );
};

const LandingpageHeaderItems: readonly navigationItems[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/" },
  { name: "Features", path: "/" },
  { name: "Pricing", path: "/" },
];

const Header = () => {
  const [openHeader, setOpenHeader] = useState('')
  const toggleHeader = () => {
    if(openHeader === 'open') {
      setOpenHeader('close')
      return;
    } 
    setOpenHeader('open')
  }
  return (
    <div className="landingpage__navigation">
        <li className="landingpage__navigation--logo">
          <div className="landingpage__navigation--logo-background"></div>
          <span>MTest</span>
          <MenuIcon className="landingpage__navigation-toggle" onClick={toggleHeader} />
        
        </li>
        <div className={` ${openHeader === 'open' ? 'show-navigation' : openHeader=== 'close' ? 'hide-navigation' : ''} landingpage__navigation--list`}>
        {LandingpageHeaderItems.map((item, i) => {
          return (
            <NavigationItems key={i} itemName={item.name} path={item.path} />
          );
        })}
        <li>
          <ul className="landingpage__navigation--auth">
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to='/signup'>
              <li className="btn-rounded btn-primary landingpage__navigation--auth-signup">
                Signup
              </li>
            </Link>
          </ul>
        </li>
        </div>
   
    </div>
  );
};

export default Header;
