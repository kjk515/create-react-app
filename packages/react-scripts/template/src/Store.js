import React from 'react';
import { Provider } from 'mobx-react';

import { sharedService } from './shared';
import { postService } from './post';

function Store({ children }) {
  return (
    <Provider sharedService={sharedService} postService={postService}>
      {children}
    </Provider>
  );
}

export default Store;
