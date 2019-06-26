import React from 'react';
import { boundMethod } from 'autobind-decorator';

import post, { PostModal } from './index';

class SnapTest extends React.Component {

  @boundMethod
  showPost() {
    const id = window.prompt('Input id what you want to find.') as string;
    post.showPost(id);
  }

  render() {
    return (
      <>
        <button onClick={this.showPost}>find the post!</button>
        <PostModal />
      </>
    );
  }
}

export default SnapTest;
