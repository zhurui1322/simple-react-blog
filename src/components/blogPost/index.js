import React, { Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import Home from '../home/index';

import PostsIndex from './components/posts_index';
import reducers from './reducers';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';
import './index.css';
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


class BlogPost extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <div>
          <Home/>
          <div className="blog-frame">
            <Switch>
              <Route path="/blog_post/posts/new" component={PostsNew} />
              <Route path="/blog_post/posts/:id" component={PostsShow}/>
              <Route path="/blog_post" component={PostsIndex} />
            </Switch>
          </div>
        </div>
      </Provider>
    );
  }
}

export default BlogPost;