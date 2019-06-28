import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import { boundMethod } from 'autobind-decorator';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import PostView from '../view/PostView';
import { PostService } from '../../present/logic/postService';

interface Params {
  id: string
}

interface Props extends RouteComponentProps<Params> {
  postService: PostService,
}

@inject('postService')
@observer
class PostContainer extends React.Component<Props> {

  componentDidMount() {
    this.findPost();
  }

  componentWillUnmount() {
    this.props.postService.initPost();
  }

  @boundMethod
  findPost() {
    const { id } = this.props.match.params;
    this.props.postService.findPost(id);
  }

  @boundMethod
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
          <Header as="h2" dividing>Post</Header>
          <PostView
            post={post}
            onDelete={this.handleRemove}
          />
        </div>
      </Container>
    );
  }
}

export default withRouter(PostContainer);
