import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { boundMethod } from 'autobind-decorator';

import PostListView from '../view/PostListView';
import PostRegisterView from '../view/PostRegisterView';

@inject('sharedService', 'postService')
@observer
class PostListContainer extends React.Component {
  componentDidMount() {
    this.findPosts();
  }

  @boundMethod
  findPosts(page) {
    const { postService, sharedService } = this.props;

    if (page) {
      sharedService.setPage('post', page);
    } else {
      sharedService.setPageMap('post', 0, 15);
    }

    postService.findPosts(sharedService.pageMap.get('post'));
    postService
      .countPosts()
      .then(count => sharedService.setCount('post', count));
  }

  @boundMethod
  handleRegister() {
    const { postService, sharedService } = this.props;

    const post = { ...postService.post };
    post.date = new Date().toISOString().slice(0, 10);

    postService.registerPost(post).then(() => {
      postService.post = {};
      this.findPosts();
      sharedService.changeModal('postRegister', false);
    });
  }

  render() {
    const { posts, post, changePostProp } = this.props.postService;
    const { pageMap, modalMap, changeModal } = this.props.sharedService;

    return (
      <>
        <Container fluid id="container">
          <div className="content">
            <Header as="h2" dividing>
              Posts
            </Header>
            <PostListView
              posts={posts}
              pageSet={pageMap.get('post')}
              onOpenRegister={() => changeModal('postRegister', true)}
              onChangePage={this.findPosts}
            />
          </div>
        </Container>
        <PostRegisterView
          open={modalMap.get('postRegister')}
          post={post}
          onClose={() => changeModal('postRegister', false)}
          onRegister={this.handleRegister}
          onChangePostProp={changePostProp}
        />
      </>
    );
  }
}

export default PostListContainer;
