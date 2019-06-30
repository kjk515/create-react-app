import React, { ComponentType } from 'react';

interface State {
  component: ComponentType | null
}

const withSplitting = (getComponent) => {

  class WithSplitting extends React.Component<{}, State> {

    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    componentDidMount() {
      getComponent().then(({ default: component }) => this.setState({ component }));
    }

    render() {

      const ImportComponent = this.state.component;

      if (!ImportComponent) return null;

      return (
        <ImportComponent
          {...this.props}
        />
      );
    }
  }

  return WithSplitting;
};

export default withSplitting;
