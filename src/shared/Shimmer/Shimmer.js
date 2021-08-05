import React, { PureComponent } from "react";
import s from "./Shimmer.module.scss";
import logo from '../.././logo.svg';

class Shimmer extends PureComponent {
  render() {
    return (
      <div className={s.shimmer}>
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Shimmer;
