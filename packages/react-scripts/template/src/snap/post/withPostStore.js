import React from 'react';

import { Provider } from 'mobx-react';
import { SharedService } from '../../shared';
import { PostService } from '../../post';

const withPostStore = Component => {
  class PostStore extends React.PureComponent {
    render() {
      return (
        <Provider sharedService={SharedService.instance} postService={PostService.instance}>
          <Component {...this.props} />
        </Provider>
      );
    }
  }

  return PostStore;
};

export default withPostStore;
