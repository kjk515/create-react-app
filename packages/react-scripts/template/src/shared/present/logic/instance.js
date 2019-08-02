function instance(Target) {

  return {
    value: new Target(),
    writable: false,
    configurable: false,
  };
}

export default instance;
