import React from 'react';
import { reactAutobind } from '@nara.platform/accent';
import { observer, inject } from 'mobx-react';

import PostView from './PostView';
import withPostStore from './withPostStore';
import { actionHandler } from '../../shared';

@inject('postService', 'sharedService')
@reactAutobind
@observer
class PostModal extends React.Component {

  componentDidMount() {
    actionHandler.containerMounted();
    actionHandler.setAction('handleOpen', this.handleOpen);
  }

  findPost(id) {
    this.props.postService.findPost(id);
  }

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
