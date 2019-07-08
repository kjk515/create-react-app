import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { reactAutobind } from '@nara.platform/accent';

import PostView from '../view/PostView';

@inject('postService')
@reactAutobind
@observer
class PostContainer extends React.Component {

  componentDidMount() {
    this.findPost();
  }

  componentWillUnmount() {
    this.props.postService.initPost();
  }

  findPost() {
    const { id } = this.props.match.params;
    this.props.postService.findPost(id);
  }

  handleRemove() {
    const { id } = this.props.match.params;
    this.props.postService.removePost(id)
      .then(() => this.props.history.push('/posts'));
  }

  render() {
    const { post } = this.props.postService;

    return (
      <Container id="container">
        <div className="content">
          <Header as="h2" dividing>
            Post
          </Header>
          <PostView post={post} onDelete={this.handleRemove} />
        </div>
      </Container>
    );
  }
}

export default PostContainer;
