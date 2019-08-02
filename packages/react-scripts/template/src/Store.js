import React from 'react';
import { Provider } from 'mobx-react';

import { SharedService } from './shared';
import { PostService } from './post';

function Store({ children }) {
  return (
    <Provider
      sharedService={SharedService.instance}
      postService={PostService.instance}
    >
      {children}
    </Provider>
  );
}

export default Store;
