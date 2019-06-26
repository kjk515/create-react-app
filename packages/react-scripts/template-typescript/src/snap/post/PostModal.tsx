import React from 'react';
import { boundMethod } from 'autobind-decorator';
import { observer, inject } from 'mobx-react';

import PostView from './PostView';
import withPostStore from './withPostStore';
import post from '../post';
import { SharedService } from '../../shared';
import { PostService } from '../../post';

interface Props {
  sharedService: SharedService
  postService: PostService
}

@inject('postService', 'sharedService')
@observer
class PostModal extends React.Component<Props> {

  componentDidMount() {
    post._containerMounted();
    post._setAction('handleOpen', this.handleOpen);
  }

  @boundMethod
  findPost(id) {
    this.props.postService.findPost(id);
  }

  @boundMethod
  handleOpen(id) {
    this.props.sharedService.changeModal('postSnap', true);
    this.findPost(id);
  }

  render() {
    const { sharedService, postService } = this.props;

    return (
      <PostView
        open={sharedService.modalMap.get('postSnap')}
        post={postService.post}
        onClose={() => sharedService.changeModal('postSnap', false)}
      />
    );
  }
}

export default withPostStore(PostModal);
