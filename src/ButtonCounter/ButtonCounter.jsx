import React, { Component } from 'react';

import { BaseButton } from '@teachers/tpt-ui';

import './ButtonCounter.scss';

class ButtonCounter extends Component {
  static propTypes = {

  }

  constructor(...args) {
    super(...args);
    this.state = { count: 0 };
  }

  render() {
    return (
      <div className="ButtonCounter">
        <BaseButton
          className="App__leftColumnButton green cta outline LinkButton"
          onClick={ () => this.setState({ count: this.state.count + 1 }) }
        >
          Hello
        </BaseButton>
        <div>
          Count = { this.state.count }
        </div>
      </div>
    )
  }
}

export default ButtonCounter;
