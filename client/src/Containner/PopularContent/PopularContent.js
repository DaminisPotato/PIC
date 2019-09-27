import React, {Component} from 'react';
import classes from './PopularContent.module.css';
import PostCard from '../../Components/PostCard/PostCard';
import axios from '../../axios-pic';

class PopularContent extends Component {
  
  render() {
    return(
      <div className={classes.PopularContent}>
        <h2> Trending Top 10 </h2>
        <div className={classes.Row}>
          <PostCard />
        </div>
      </div>
    )
  }
}

export default PopularContent;