import React from 'react';
import { RequiredLoginError } from './';

type State = { hasError: boolean };

export class RequiredLoginErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: unknown) {
    if (RequiredLoginError.isInstance(error)) {
      return this.setState({ ...this.state, hasError: true });
    }
    throw error;
  }

  render() {
    if (this.state.hasError) {
      return <>未ログイン</>;
    }

    return this.props.children;
  }
}
