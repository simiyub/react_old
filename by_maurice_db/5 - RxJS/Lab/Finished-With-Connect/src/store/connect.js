import React, { Component } from "react";

import { store$, initialState } from "./store";

export const connect = mapStateToProps => WrappedComponent => {
  return class extends Component {
    state = mapStateToProps(initialState);
    subscription = null;

    componentDidMount() {
      this.subscription = store$.subscribe(state =>
        this.setState(mapStateToProps(state))
      );
    }

    componentWillUnmount() {
      this.subscription.unsubscribe();
    }

    render() {
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };
};
