import React, {Component} from 'react';
import axios from '../../axios-pic';
import { Collapse, Icon, Spin } from 'antd';
import PostItem from '../../Components/Posts/PostItem';
import classes from './UserPage.module.css';
import UserAvatar from '../../Components/Users/UserAvatar/UserAvatar';
import Comment from '../../Components/Comments/Comment/Comment';
import {withRouter} from 'react-router-dom';

const {Panel} = Collapse;

/*
  UserPage uses antd Collapse and waterfall style to display a user' posts and comments.
  Posts and comments are async loaded by clicking panels.
 */

class UserPage extends Component {
  state = {
    posts: null,
    comments: null,
    secondaryComments: null,
  }
  
  UNSAFE_componentWillMount() {
    if (!this.props.location.state) {
      this.props.history.push("/notFound");
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.state.id !== this.props.location.state.id){
      this.setState({ posts: null,
                      comments: null,
                      secondaryComments: null,})
    }
  }
  collapseOnChangeHandler = (key) => {
    console.log(key);
    if ( key === 'post') {
      this.getDataHandler("/post/user/", "posts");
    }
    if ( key === 'first') {
      this.getDataHandler("/posts/user/", "comments")
    }
    if ( key === 'second') {
      this.getDataHandler("/posts/secondComments/user/", "secondaryComments")
    }
  }
  getDataHandler = ( api, dataType) => {
    if ( !this.state[dataType] && this.props.location.state.id) {
      axios.get( api + this.props.location.state.id)
        .then( res => {
          console.log(res);
          this.setState((state, props) => {
            return state[dataType] = res.data
          })
        })
    }
  }
  postClickHandler = (postData) => {
    let path = {
      pathname: '/post/' + postData._id,
    }
    this.props.history.push(path);
  }
  render(){
    let postsList = <Spin />;
    if (this.state.posts){
      postsList = this.state.posts.map( post => {
        return (
          <div className={classes.Item} key={post._id}>
            <PostItem
              extra={true}
              clicked={this.postClickHandler} 
              type="mainpage" 
              post={post} />
          </div>
        )
      })
    }
    let commentsList = <Spin />;
    if (this.state.comments){
      commentsList = this.state.comments.map( comment => {
        return (
          <div className={classes.Item} key={comment._id}>
            <Comment
              extra={true}
              clicked={this.postClickHandler} 
              level="first" 
              commentData={comment} />
          </div>
        )
      })
    }

    let secondaryCommentsList = <Spin />;
    if (this.state.secondaryComments){
      secondaryCommentsList = this.state.secondaryComments.map( comment => {
        return (
          <div className={classes.Item} key={comment._id}>
            <Comment
              extra={true}
              clicked={this.postClickHandler} 
              level="second" 
              commentData={comment} />
          </div>
        )
      })
    }
    let username = null;
    if (this.props.location.state){
      username = this.props.location.state.name;
    }
    return (
      <div className={classes.UserPageWrapper} >
        <UserAvatar type="userpage" owner={{name: username}}/>
        <Collapse 
          accordion
          bordered={false}
          onChange={this.collapseOnChangeHandler}
          expandIcon={({ isActive }) => <Icon type="caret-right" rotate={isActive ? 90 : 0}/>}
        >
          <Panel header="Posts" key="post">
            <div className={classes.Waterfall}>
              {this.state.posts ? postsList : null}
            </div>
          </Panel>
          <Panel header="Comments" key="first">
            <div className={classes.Waterfall}>
              {this.state.comments ? commentsList : null}
            </div>
          </Panel >
          <Panel header="Secondary Comments" key="second">
            <div className={classes.Waterfall}>
              {this.state.secondaryComments ? secondaryCommentsList : null}
            </div>
          </Panel>
        </Collapse>
      </div>
    )
  }
}

export default withRouter(UserPage);