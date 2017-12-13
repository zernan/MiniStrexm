import React, { Component } from 'react';

/**
 * @description: catches errors thrown by children 
 * (except for those thrown by event handlers, those should be handled manually)
 */
class ErrorBoundary extends Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });

    // You can log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // Render custom fallback UI
      return <h1>{this.props.childName} : Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;