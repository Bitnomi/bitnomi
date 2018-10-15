import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';

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
        <LinkContainer to={'/'} exact>
          <Menu.Item key="home">
            <Icon type= "home" /> Home
          </Menu.Item>
        </LinkContainer>
        
        <LinkContainer to={'/counter'}>
          <Menu.Item key="counter">
          <Icon type="dashboard" /> counter
          </Menu.Item>
        </LinkContainer>
          
        <LinkContainer to ={'/fetchdata'}>
          <Menu.Item key="fetchdata">
          <Icon type="setting" /> FetchData
          </Menu.Item>
        </LinkContainer>
      </Menu>
    );
  }
}
  