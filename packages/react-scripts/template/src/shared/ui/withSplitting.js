import React from 'react';

const withSplitting = getComponent => {
  class WithSplitting extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      getComponent().then(({ default: component }) =>
        this.setState({ component })
      );
    }

    render() {
      const ImportComponent = this.state.component;

      if (!ImportComponent) return null;

      return <ImportComponent {...this.props} />;
    }
  }

  return WithSplitting;
};

export default withSplitting;
