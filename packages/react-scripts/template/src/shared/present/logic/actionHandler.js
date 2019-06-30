const actionHandler = {

  actionQueue: [],
  isContainerMounted: false,
  actionMap: new Map(),

  setAction: (actionType, callback) => {
    actionHandler.actionMap.set(actionType, callback);
  },

  containerMounted: () => {
    actionHandler.isContainerMounted = true;
    actionHandler.actionQueue.forEach(({ actionType, args }) => {
      actionHandler.actionMap.get(actionType)(...args);
    });
  },

  dispatchAction: (actionType, ...args) => {
    if (actionHandler.isContainerMounted) {
      actionHandler.actionMap.get(actionType)(...args);
    } else {
      actionHandler.actionQueue.push({ actionType, args });
    }
  },
};

export default actionHandler;
