
import { actionHandler } from '../../shared';

const post = {
  showPost: (postId) => {
    actionHandler.dispatchAction('handleOpen', postId);
  },
};

export default post;
