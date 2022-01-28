import React from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

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
  return (
    <div className="landingpage__navigation">
      <ul className="landingpage__navigation--list">
        <li className="landingpage__navigation--logo">
          <div className="landingpage__navigation--logo-background"></div>
          <span>MTest</span>
        </li>
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
      </ul>
    </div>
  );
};

export default Header;
