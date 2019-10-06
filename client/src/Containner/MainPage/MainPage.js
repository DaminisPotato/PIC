import React, {Fragment} from 'react';
import PostList from '../PostList/PostList';
import {Row, Col} from 'antd';
import PopularPost from '../../Components/Popular/PopularPost/PopularPost';
import UserAvatar from '../../Components/User/UserAvatar';
import classes from './MainPage.module.css';
import PopularUser from '../../Components/Popular/PopularUser/PopularUser';

const mainPage = (props) => {
  return(
    <Row gutter={32} className={classes.MainPageWrapper}>
      <Col xs={24} sm={24} md={24} lg={14} >
        <PostList type="mainpage" api='/post'/>
      </Col>
      <Col xs={0} lg={10} className={classes.TrendWrapper}>
        <UserAvatar />
        <PopularPost />
        <PopularUser />
      </Col>
    </Row>
  )
}

export default mainPage;