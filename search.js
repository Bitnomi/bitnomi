import React, { Component } from 'react';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';
import './App.css';

class Search  extends Component {

  render() {

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M344.575167 127.593613H31.168098A29.768186 29.768186 0 0 1 0.083383 95.704352a29.768186 29.768186 0 0 1 31.084715-31.88926h313.407069a29.768186 29.768186 0 0 1 31.084715 31.88926 29.768186 29.768186 0 0 1-31.084715 31.889261z m0 446.559361H31.168098a29.768186 29.768186 0 0 1-31.084715-31.889261 29.768186 29.768186 0 0 1 31.084715-31.889261h313.407069a29.768186 29.768186 0 0 1 31.084715 31.889261 29.768186 29.768186 0 0 1-31.084715 31.889261zM1033.558735 1023.967087H31.168098a29.768186 29.768186 0 0 1-31.084715-31.889261 29.768186 29.768186 0 0 1 31.084715-31.925831h1002.390637a30.060748 30.060748 0 0 1 31.450418 31.925831 31.889261 31.889261 0 0 1-31.450418 31.889261z m53.39257-293.476281l-185.045481-188.190523a308.360374 308.360374 0 0 0 115.927703-239.206025 297.535579 297.535579 0 1 0-297.316158 303.021117 278.84818 278.84818 0 0 0 125.070266-28.707649l197.479366 201.136392a29.987608 29.987608 0 0 0 43.884304 0 35.326864 35.326864 0 0 0 0-48.089883zM485.370641 303.094258a235.000446 235.000446 0 1 1 235.146728 239.206025 236.755819 236.755819 0 0 1-235.146728-239.242596z" p-id="2131" fill="#999999"></path></svg>
);
const HeartIcon = props => (
  <Icon component={HeartSvg} {...props} style={{ color: "hotpink" }} />
);



    return (
      <div className="App">
     <div className=" example-input">
     
    <Input style={{ width: 200 }} placeholder="default size" suffix={<HeartIcon />} />

  </div>
  </div>
    );
  }
}

export default Search;
