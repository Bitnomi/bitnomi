import React, { Component } from 'react';
import './App.css';
import Button from 'antd/lib/button';
import Search from './search';
import OrderTable  from './table';


class App extends Component {

 state = {
    size: 'large',
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
   const size = this.state.size;
    return (
     <div className="custom-icons-list App">
       <Button type="primary" icon="upload" size={size}>Export</Button>
    <Search />
     <OrderTable />
  </div>
    );
  }
}

export default App;

 
