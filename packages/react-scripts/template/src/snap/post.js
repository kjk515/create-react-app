const post = {
  actionQueue: [],
  isContainerMounted: false,
  actionMap: new Map(),

  _setAction: (actionType, callback) => {
    post.actionMap.set(actionType, callback);
  },

  _containerMounted: () => {
    post.isContainerMounted = true;
    post.actionQueue.forEach(({ actionType, args }) => {
      post.actionMap.get(actionType)(...args);
    });
  },

  _dispatchAction: (actionType, ...args) => {
    if (post.isContainerMounted) {
      post.actionMap.get(actionType)(...args);
    } else {
      post.actionQueue.push({ actionType, args });
    }
  },

  showPost: postId => {
    post._dispatchAction('handleOpen', postId);
  },
};

export default post;
