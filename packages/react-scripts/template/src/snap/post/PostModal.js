import React from 'react';
import { boundMethod } from 'autobind-decorator';
import { observer, inject } from 'mobx-react';

import PostView from './PostView';
import withPostStore from './withPostStore';
import { actionHandler } from '../../shared';

@inject('postService', 'sharedService')
@observer
class PostModal extends React.Component {

  componentDidMount() {
    actionHandler.containerMounted();
    actionHandler.setAction('handleOpen', this.handleOpen);
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
