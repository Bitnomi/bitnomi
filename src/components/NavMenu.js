import React, { Component } from 'react';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
import Home from './Home.js'
import FetchData from './FetchData'
import Counter from './Counter'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//const SubMenu = Menu.SubMenu;
//const MenuItemGroup = Menu.ItemGroup;

export class NavMenu extends Component {
  
  
//   render() {
//   return (
//   <Navbar fixedTop fluid collapseOnSelect>
//     <Navbar.Header>
//       <Navbar.Brand>
//         <Link to={'/'}>devscore</Link>
//       </Navbar.Brand>
//       <Navbar.Toggle />
//     </Navbar.Header>
//     <Navbar.Collapse>
//       <Nav>
//         <LinkContainer to={'/'} exact>
//           <NavItem>
//             <Glyphicon glyph='home' /> Home
//           </NavItem>
//         </LinkContainer>
//         <LinkContainer to={'/counter'}>
//           <NavItem>
//             <Glyphicon glyph='education' /> Counter
//           </NavItem>
//         </LinkContainer>
//         <LinkContainer to={'/fetchdata'}>
//           <NavItem>
//             <Glyphicon glyph='th-list' /> Fetch data
//           </NavItem>
//         </LinkContainer>
//       </Nav>
//     </Navbar.Collapse>
//   </Navbar>  
//    )
//   }
// }
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click', e);
    this.setState({
      current: e.key,
    })
    return (<LinkContainer to={`/${this.state.current}`}>

    </LinkContainer>)
  }
  
  displayName = NavMenu.name
    
  render() {
    return (
      <Menu onClick = {this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
       
       <Menu.Item>
        <Link to="/">
        <Icon type="home" />
        Home
        </Link>          
        </Menu.Item>
        <Menu.Item>

        <Link to="/counter">
        <Icon type='dashboard' />
        Counter
        </Link>
</Menu.Item>
        <Menu.Item>

        <Link to="/fetchdata">
        <Icon type='setting' />
        Fetchdata
        </Link>
</Menu.Item>

      </Menu>
    );
  }
}
  