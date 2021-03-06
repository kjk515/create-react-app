import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { observer, inject } from 'mobx-react';
import { reactAutobind } from '@nara.platform/accent';

import PostListView from '../view/PostListView';
import PostRegisterView from '../view/PostRegisterView';

@inject('sharedService', 'postService')
@reactAutobind
@observer
class PostListContainer extends React.Component {

  componentDidMount() {
    this.findPosts();
  }

  findPosts(page) {
    const { postService, sharedService } = this.props;

    if (page) {
      sharedService.setPage('post', page);
    } else {
      sharedService.setPageMap('post', 0, 15);
    }

    postService.findPosts(sharedService.pageMap.get('post'));
    postService.countPosts().then(count => sharedService.setCount('post', count));
  }

  handleRegister() {
    const { postService, sharedService } = this.props;

    postService.registerPost().then(() => {
      this.findPosts();
      sharedService.changeModal('postRegister', false);
      postService.initPost();
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
