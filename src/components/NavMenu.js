import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import "./NavMenu.css";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { Button } from "antd";
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
    current: "home"
  };

  handleClick = e => {
    console.log("click", e);
    this.setState({
      current: e.key
    });
    return <LinkContainer to={`/${this.state.current}`} />;
  };

  displayName = NavMenu.name;

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-primary Navbarstyle">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Bitonami</Link>
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/counter">Counter</Link>
          </li>

          <li className="nav-item">
            <Link to="/fetchdata">Fetchdata</Link>
          </li>
          <li className="nav-item">
            <Link to="/counter">Market</Link>
          </li>

          <li className="nav-item">
            <Link to="/fetchdata">Create an ad</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li>
            <Link to="/">
              <Button type="primary">Login</Button>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
