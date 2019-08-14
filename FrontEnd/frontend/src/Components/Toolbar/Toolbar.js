import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = () => {
  return(
    <header className={classes.Toolbar}>
      <nav>Logo</nav>
      <nav>
        <NavigationItems/>  
      </nav>
    </header>
  )
}

export default toolbar;