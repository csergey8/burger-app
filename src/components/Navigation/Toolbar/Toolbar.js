import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import classes from './Toolbar.css';



const toolbar = (props) => (
  <header className={classes.Toolbar}>
  <HamburgerMenu clicked={props.open}/>
  <div className={classes.Logo}>
    <Logo />
  </div>
  <nav className={classes.DesktopOnly}>
  <NavigationItems isAuthenticated={props.isAuth}/>
  </nav>
  </header>
);

export default toolbar;
