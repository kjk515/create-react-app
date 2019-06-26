
interface Post {
  actionQueue: {actionType: string, args: any[]}[]
  isContainerMounted: boolean
  actionMap: Map<string, Function>
  _setAction: (actionType: string, callback: Function) => void
  _containerMounted: () => void
  _dispatchAction: (actionType: string, any) => void
  showPost: (postId: string) => void
}

const post: Post = {

  actionQueue: [],
  isContainerMounted: false,
  actionMap: new Map(),

  _setAction: (actionType, callback) => {
    post.actionMap.set(actionType, callback);
  },

  _containerMounted: () => {
    post.isContainerMounted = true;
    post.actionQueue.forEach(({ actionType, args }) => {

      const action = post.actionMap.get(actionType);
      if(action) {
        action(...args);
      }

    });
  },

  _dispatchAction: (actionType, ...args) => {
    if (post.isContainerMounted) {
      const action = post.actionMap.get(actionType);
      if(action) {
        action(...args);
      }
    } else {
      post.actionQueue.push({ actionType, args });
    }
  },

  showPost: (postId) => {
    post._dispatchAction('handleOpen', postId);
  },
};

export default post;
